import StartScreen from "./components/StartScreen"
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { useState } from "react";

const App = () => {
  const [isMuted, setIsMuted] = useState<boolean>(false);
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 overflow-hidden text-white">
      <StartScreen isMuted={isMuted} setIsMuted={setIsMuted} />
      <div className="bg-overlay bg-grid"></div>
      <button
        onClick={() => { setIsMuted(!isMuted) }}
        className="fixed bottom-8 left-8 cursor-pointer p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 hover:scale-110 active:scale-95 transition-all duration-300 z-50"
      >
        {isMuted ? (
          <FaVolumeMute size={28} />
        ) : (
          <FaVolumeUp size={28} />
        )}
      </button>
    </div>
  )
}

export default App