import { useState } from "react";
import Board from "./Board";
import type { Difficulty } from "../ConfigGame";

const StartScreen = () => {
    const [show, setShow] = useState<boolean>(false);
    const [difficulty, setDifficulty] = useState<Difficulty>("medium");

    return (
        <div className="text-center px-4">
            {!show ? (
                <>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-linear-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl">
                        MIND<br />CHALLENGE
                    </h1>
                    <div className="text-lg text-indigo-200 justify-center flex gap-10 mb-10 mt-10">
                        <div
                            onClick={() => setDifficulty("slow")}
                            className={`border border-indigo-600 hover:border-indigo-400 rounded-xl px-6 py-2 cursor-pointer transition-colors ${difficulty === "slow" ? "bg-indigo-500" : "bg-indigo-800"}`}
                        >
                            SLOW
                        </div>
                        <div
                            onClick={() => setDifficulty("medium")}
                            className={`border border-indigo-600 hover:border-indigo-400 rounded-xl px-6 py-2 cursor-pointer transition-colors ${difficulty === "medium" ? "bg-indigo-500" : "bg-indigo-800"}`}
                        >
                            MEDIUM
                        </div>
                        <div
                            onClick={() => setDifficulty("fast")}
                            className={`border border-indigo-600 hover:border-indigo-400 rounded-xl px-6 py-2 cursor-pointer transition-colors ${difficulty === "fast" ? "bg-indigo-500" : "bg-indigo-800"}`}
                        >
                            FAST
                        </div>
                    </div>
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
                    <Board difficulty={difficulty} />
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