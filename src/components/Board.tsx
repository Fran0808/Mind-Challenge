import Square from "./Square";

const Board = () => {
  const number = 9;
  const array = Array(number).fill(null);

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-2 w-64 h-64">
      {array.map((_, index: number) => (
        <Square key={index} />
      ))}
    </div>
  );
};

export default Board;
