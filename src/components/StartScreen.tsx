import { useState } from "react";
import Board from "./Board";

const StartScreen = () => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <div className="flex justify-center items-center min-h-screen">
            {!show &&
                <button className="text-4xl bg-blue-600 text-white font-bold rounded-md pt-2 pb-2 pl-8 pr-8 cursor-pointer" onClick={() => setShow(true)}>Start</button>
            }
            {show && <Board />}
        </div>
    )
}

export default StartScreen;