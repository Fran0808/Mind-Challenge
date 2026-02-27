import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import type { SoundControlInterface } from "../../interfaces/SoundControl";

const SoundButton = ({ setIsMuted, isMuted }: SoundControlInterface) => {
    return (
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
    )
}

export default SoundButton;