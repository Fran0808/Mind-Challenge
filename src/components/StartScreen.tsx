import { useState } from "react";
import Board from "./Board";

const StartScreen = () => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <div>
            <button className="text-2xl cursor-pointer" onClick={()=>setShow(!show)}>Start</button>
            {show && <Board/>}
        </div>
    )
}

export default StartScreen;