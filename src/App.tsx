import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import StartScreen from "./screens/StartScreen"
import SequenceMemoryScreen from "./screens/SequenceMemoryScreen"
import NotFoundScreen from "./screens/NotFoundScreen"

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StartScreen />} />
          <Route path="sequence" element={<SequenceMemoryScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App