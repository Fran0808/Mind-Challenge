import { useState, useEffect, useRef } from "react";
import type { SquareInterface } from "../interfaces/Square";
import { Howl } from 'howler';

const Square = ({ index: _index, isActive, onClick, sound, isPlaying }: SquareInterface) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    if (sound) {
      soundRef.current = new Howl({ src: [sound] });
    } else {
      soundRef.current = null;
    }
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
      className={`w-full h-full rounded-md transition-all duration-75 ease-out
        ${isPlaying ? "cursor-default" : "cursor-pointer"} 
        ${isHighlighted ? "bg-linear-to-t from-amber-300 to-orange-400" : "bg-linear-to-t from-amber-600 to-orange-700"}`}
    ></div>
  );
};

export default Square;
