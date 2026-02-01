import { useState, useEffect } from "react";
import Square from "./Square";

const Board = () => {
  const size = 9;
  const array = Array(size).fill(null);

  const [sequence, setSequence] = useState<number[]>([]);
  const [active, setActive] = useState<number | null>(null);
  const [userSequence, setUserSequence] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    addToSequence();
  }, []);

  useEffect(() => {
    console.log(sequence);
  }, [sequence]);

  useEffect(() => {
    if (sequence.length > 0) {
      playSequence();
    }
  }, [sequence]);

  const addToSequence = () => {
    const last = sequence[sequence.length - 1];
    let randomIndex = Math.floor(Math.random() * size);

    while (randomIndex === last) {
      randomIndex = Math.floor(Math.random() * size);
    }

    setSequence((prev) => {
      return [...prev, randomIndex];
    });
  };

  const playSequence = () => {
    setIsPlaying(true);
    setUserSequence([]);
    sequence.forEach((index, i) => {
      setTimeout(() => setActive(index), i * 1000);
      setTimeout(() => setActive(null), i * 1000 + 1000);
    });
    setTimeout(() => setIsPlaying(false), sequence.length * 1000);
  };

  const handleClick = (clickedIndex: number) => {
    if (isPlaying) return;

    const newUserSequence = [...userSequence, clickedIndex];
    setUserSequence(newUserSequence);

    const currentIndex = newUserSequence.length - 1;

    if (clickedIndex !== sequence[currentIndex]) {
      alert("Game Over");
      setSequence([]);
      setUserSequence([]);
      addToSequence();
      return;
    }

    if (newUserSequence.length === sequence.length) {
      setTimeout(() => {
        addToSequence();
      }, 500);
    }
  };

  return (
    <div className="flex justify-center items-center border-2">
      <div className="grid grid-cols-3 grid-rows-3 gap-4 p-4 m-4 w-96 h-96 border-2">
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
