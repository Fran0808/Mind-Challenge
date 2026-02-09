import { useState, useEffect, useRef } from "react";
import type { SquareInterface } from "../interfaces/Square";
import { Howl } from 'howler';

const Square = ({ index: _index, isActive, onClick, sound, isPlaying }: SquareInterface) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    soundRef.current = new Howl({ src: [sound] });
    return () => {
      soundRef.current?.unload();
    };
  }, [sound]);

  const isHighlighted = isActive || isClicked;

  useEffect(() => {
    if (isActive) {
      soundRef.current?.play();
    }
  }, [isActive]);

  const handleColor = () => {
    if (isPlaying) return;
    soundRef.current?.play();
    setIsClicked(true);
    onClick();
    setTimeout(() => setIsClicked(false), 200);
  };


  return (
    <div
      onClick={handleColor}
      className={`w-full h-full rounded-md ${isPlaying ? "cursor-default" : "cursor-pointer"} transition-all duration-75 ease-out ${isHighlighted ? "bg-amber-300" : "bg-amber-600"}`}
    ></div>
  );
};

export default Square;
