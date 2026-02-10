import { useState, useEffect, useRef } from "react";
import Square from "./Square";
import GameOverScreen from "./GameOverScreen";

const SEQUENCE_START_DELAY = 1000; // default: 1000
const SQUARE_DISPLAY_DURATION = 1000; // default: 1000
const NEXT_LEVEL_DELAY = 600; // default: 600

const Board = () => {
  const size = 9;
  const array = Array(size).fill(null);

  const [sequence, setSequence] = useState<number[]>([]);
  const [active, setActive] = useState<number | null>(null);
  const [userSequence, setUserSequence] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [lastScore, setLastScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);

  const playTimeOutRef = useRef<number | null>(null);
  const timeoutsRef = useRef<number[]>([]);
  const soundFailRef = useRef<Howl | null>(null);

  const route = (index: number) => {
    return `/sounds/pad-${index}.wav`
  }

  useEffect(() => {
    const stored = localStorage.getItem("highScore");
    const value = Number(stored);

    if (!Number.isNaN(value)) {
      setHighScore(value);
    }
  }, []);

  useEffect(() => {
    const storedHighScore = localStorage.getItem("highScore");

    if (storedHighScore !== null) {
      setHighScore(Number(storedHighScore));
    }
  }, []);


  useEffect(() => {
    soundFailRef.current = new Howl({ src: ["/sounds/fail-sound.wav"] });
  }, []);

  useEffect(() => {
    addToSequence();
  }, []);

  useEffect(() => {
    if (gameOver) return;

    if (playTimeOutRef.current !== null) {
      clearTimeout(playTimeOutRef.current);
    }

    setIsPlaying(true);

    playTimeOutRef.current = window.setTimeout(() => {
      if (sequence.length > 0 && !gameOver) {
        playSequence();
      }
    }, SEQUENCE_START_DELAY);

    return () => {
      if (playTimeOutRef.current !== null) {
        clearTimeout(playTimeOutRef.current);
      }
    }
  }, [sequence, gameOver]);

  const addToSequence = () => {
    setSequence(prev => {
      const last = prev[prev.length - 1];
      let randomIndex = Math.floor(Math.random() * size);

      while (randomIndex === last) {
        randomIndex = Math.floor(Math.random() * size);
      }
      return [...prev, randomIndex];
    })
  };

  const playSequence = () => {
    clearAllTimeouts();
    setIsPlaying(true);
    setUserSequence([]);

    sequence.forEach((index, i) => {

      const onId = window.setTimeout(() => {
        setActive(index);
      }, i * SQUARE_DISPLAY_DURATION);

      const offId = window.setTimeout(() => {
        setActive(null);
      }, i * SQUARE_DISPLAY_DURATION + SQUARE_DISPLAY_DURATION);

      timeoutsRef.current.push(onId, offId);

    });

    const endId = window.setTimeout(() => {
      setIsPlaying(false);
    }, sequence.length * SQUARE_DISPLAY_DURATION);

    timeoutsRef.current.push(endId);

  };

  const handleRestart = () => {
    clearAllTimeouts();
    setSequence([]);
    setUserSequence([]);
    setActive(null);
    setIsPlaying(false);
    setGameOver(false);
    addToSequence();
  }

  const handleClick = (clickedIndex: number) => {
    if (isPlaying || gameOver) return;

    const newUserSequence = [...userSequence, clickedIndex];
    setUserSequence(newUserSequence);

    const currentIndex = newUserSequence.length - 1;

    if (clickedIndex !== sequence[currentIndex]) {
      clearAllTimeouts();
      setGameOver(true);
      setLastScore(sequence.length)
      if (sequence.length > highScore) {
        localStorage.setItem("highScore", String(sequence.length));
        setHighScore(sequence.length)
      }
      soundFailRef.current?.play();
      return;
    }

    if (newUserSequence.length === sequence.length) {
      const nextLevelTimeout = window.setTimeout(() => {
        addToSequence();
      }, NEXT_LEVEL_DELAY);
      timeoutsRef.current.push(nextLevelTimeout);
    }
  };

  const clearAllTimeouts = () => {
    if (playTimeOutRef.current !== null) {
      clearTimeout(playTimeOutRef.current);
      playTimeOutRef.current = null;
    }
    timeoutsRef.current.forEach(timeoutId => {
      clearTimeout(timeoutId);
    });
    timeoutsRef.current = [];
  };

  useEffect(() => {
    return () => clearAllTimeouts();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="text-4xl font-black ">Level {sequence.length}</div>
      <br />
      {gameOver && <GameOverScreen handleRestart={handleRestart} score={sequence.length} />}
      <div className="relative">
        <div className="grid grid-cols-3 grid-rows-3 gap-4 p-4 m-4 w-96 h-96">
          {array.map((_, index: number) => (
            <Square
              key={index}
              index={index}
              isActive={active === index}
              onClick={() => handleClick(index)}
              sound={route(index)}
              isPlaying={isPlaying}
            />
          ))}
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-full ml-4 whitespace-nowrap flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest leading-none">Score</span>
            <span className="text-3xl font-black text-white">{lastScore}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest leading-none">Highest</span>
            <span className="text-3xl font-black text-white">{highScore}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
