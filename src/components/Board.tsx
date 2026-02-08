import { useState, useEffect, useRef } from "react";
import Square from "./Square";
import GameOverScreen from "./GameOverScreen";

const Board = () => {
  const size = 9;
  const array = Array(size).fill(null);

  const [sequence, setSequence] = useState<number[]>([]);
  const [active, setActive] = useState<number | null>(null);
  const [userSequence, setUserSequence] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const playTimeOutRef = useRef<number | null>(null);
  const timeoutsRef = useRef<number[]>([]);

  useEffect(() => {
    addToSequence();
  }, []);

  useEffect(() => {

    if (playTimeOutRef.current !== null) {
      clearTimeout(playTimeOutRef.current);
    }

    playTimeOutRef.current = window.setTimeout(() => {
      if (sequence.length > 0) {
        playSequence();
      }
    }, 1200);

    return () => {
      if (playTimeOutRef.current !== null) {
        clearTimeout(playTimeOutRef.current);
      }
    }
  }, [sequence]);

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
      }, i * 1000);

      const offId = window.setTimeout(() => {
        setActive(null);
      }, i * 1000 + 1000);

      timeoutsRef.current.push(onId, offId);

    });

    const endId = window.setTimeout(() => {
      setIsPlaying(false);
    }, sequence.length * 1000);

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
    if (isPlaying) return;

    const newUserSequence = [...userSequence, clickedIndex];
    setUserSequence(newUserSequence);

    const currentIndex = newUserSequence.length - 1;

    if (clickedIndex !== sequence[currentIndex]) {
      clearAllTimeouts();
      setGameOver(true);
      return;
    }

    if (newUserSequence.length === sequence.length) {
      setTimeout(() => {
        addToSequence();
      }, 600);
    }
  };

  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach(timeoutId => {
      clearTimeout(timeoutId);
    });
    timeoutsRef.current = [];
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="text-4xl font-black ">Level {sequence.length}</div>
      <br />
      {gameOver && <GameOverScreen handleRestart={handleRestart} score={sequence.length} />}
      <div className="grid grid-cols-3 grid-rows-3 gap-4 p-4 m-4 w-96 h-96">
        {array.map((_, index: number) => (
          <Square
            key={index}
            index={index}
            isActive={active === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
