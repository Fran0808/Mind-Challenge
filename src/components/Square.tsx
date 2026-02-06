import { useState } from "react";
import type { SquareInterface } from "../interfaces/Square";
import { Howl } from 'howler';

const Square = ({ index: _index, isActive, onClick }: SquareInterface) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  let square_click = new Howl({
    src: ['sounds/square-click.wav']
  })

  const handleColor = () => {
    square_click.play();
    setIsClicked(true);
    onClick();
    setTimeout(() => setIsClicked(false), 200);
  };

  const isHighlighted = isActive || isClicked;

  return (
    <div
      onClick={handleColor}
      className={`w-full h-full rounded-md cursor-pointer transition-all duration-75 ease-out ${isHighlighted ? "bg-green-400" : "bg-green-700"}`}
    ></div>
  );
};

export default Square;
