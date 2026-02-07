import { useState } from "react";
import Board from "./Board";

const StartScreen = () => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <div className="text-center px-4">
            {!show ? (
                <>
                    <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter bg-linear-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl">
                        MIND<br />CHALLENGE
                    </h1>

                    <div className="relative group inline-block">
                        <div className="absolute -inset-1 bg-linear-to-r from-amber-600 to-orange-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300 animate-pulse-glow"></div>
                        <button
                            className="relative px-12 py-4 bg-linear-to-r from-amber-500 to-orange-500 text-white font-black text-2xl rounded-xl shadow-glow-amber hover:shadow-glow-amber-hover transform hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-amber-300/30"
                            onClick={() => setShow(true)}
                        >
                            START GAME
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <Board />
                    <button
                        className="relative px-12 py-4 bg-linear-to-r from-amber-500 to-orange-500 text-white font-black text-2xl rounded-xl shadow-glow-amber hover:shadow-glow-amber-hover transform hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-amber-300/30"
                        onClick={() => setShow(false)}
                    >
                        HOME
                    </button>
                </>
            )}
        </div>
    )
}

export default StartScreen;