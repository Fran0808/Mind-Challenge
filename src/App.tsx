import SoundButton from "./components/SoundButton";
import StartScreen from "./components/StartScreen"
import { useState } from "react";

const App = () => {
  const [isMuted, setIsMuted] = useState<boolean>(false);
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 overflow-hidden text-white">
      <StartScreen isMuted={isMuted} setIsMuted={setIsMuted} />
      <div className="bg-overlay bg-grid animate-grid"></div>
      <SoundButton setIsMuted={setIsMuted} isMuted={isMuted} />
    </div>
  )
}

export default App