import { useOutletContext } from "react-router-dom";

const StartScreen = () => {
    const { isMuted } = useOutletContext<{ isMuted: boolean }>();
    return (
        <div className="text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-linear-to-r from-white via-indigo-200 to-indigo-300 bg-clip-text text-transparent mb-12">
                MIND<br />CHALLENGE
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl px-4">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-linear-to-r from-lime-500 to-emerald-600 rounded-xl blur opacity-25 group-hover:opacity-60 transition duration-300"></div>
                    <button className="relative w-full px-8 py-6 bg-linear-to-r from-lime-500 to-emerald-600 font-black text-xl rounded-xl transform hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-lime-300/30 tracking-widest">
                        SEQUENCE MEMORY
                    </button>
                </div>

                <div className="relative group">
                    <div className="absolute -inset-1 bg-linear-to-r from-slate-600 to-slate-800 rounded-xl opacity-10 group-hover:opacity-40 transition duration-300"></div>
                    <button className="relative w-full px-8 py-6 bg-linear-to-r from-slate-700 to-slate-900 font-black text-xl rounded-xl border border-white/5 tracking-widest grayscale">
                        COMING SOON
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StartScreen;