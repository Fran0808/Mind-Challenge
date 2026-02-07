import StartScreen from "./components/StartScreen"

const App = () => {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 overflow-hidden text-white">
      <StartScreen />
      <div className="bg-overlay bg-grid"></div>
    </div>
  )
}

export default App