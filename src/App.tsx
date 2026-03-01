import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import StartScreen from "./screens/StartScreen"
import SequenceMemoryScreen from "./screens/SequenceMemoryScreen"

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StartScreen />} />
          <Route path="sequence" element={<SequenceMemoryScreen />} />
          <Route path="*" element={<h1>Not Found 404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App