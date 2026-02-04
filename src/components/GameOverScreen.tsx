const GameOverScreen = ({ handleRestart }: { handleRestart: () => void }) => {
    return (
        <div className="absolute inset-0 bg-white bg-opacity-50 flex justify-center items-center">
            <button className="text-4xl bg-blue-600 text-white font-bold rounded-md pt-2 pb-2 pl-8 pr-8 cursor-pointer" onClick={handleRestart}>Restart</button>
        </div>
    )
}

export default GameOverScreen;