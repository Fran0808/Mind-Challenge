import { useState } from "react";
import type { SquareInterface } from "../interfaces/Square";

const Square = ({isActive, onClick }: SquareInterface) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleColor = () => {
    setIsClicked(true);
    onClick();
    setTimeout(() => setIsClicked(false), 200);
  };

  const isHighlighted = isActive || isClicked;

  return (
    <div
      onClick={handleColor}
      className={`w-full h-full ${isHighlighted ? "bg-green-400" : "bg-green-700"} rounded-md cursor-pointer `}
    ></div>
  );
};

export default Square;
