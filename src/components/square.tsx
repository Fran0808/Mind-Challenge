import type { SquareInterface } from "../interfaces/Square";

const Square = ({index, isActive, onClick}: SquareInterface) => {
    return(
        <div onClick={onClick} className={`w-full h-full ${isActive ? "bg-green-400": "bg-green-700"} rounded-md cursor-pointer `}></div>
    )
}

export default Square;