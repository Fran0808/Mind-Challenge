import { useState } from "react";
import SoundButton from "../components/ui/SoundButton";
import { Outlet } from "react-router-dom";

const Layout = () => {
    const [isMuted, setIsMuted] = useState<boolean>(false);
    return (
        <div className="relative flex flex-col justify-center items-center min-h-screen bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 overflow-hidden text-white">
            <Outlet context={{ isMuted }} />
            <div className="bg-overlay bg-grid animate-grid"></div>
            <SoundButton setIsMuted={setIsMuted} isMuted={isMuted} />
        </div>
    )
}

export default Layout;