import { Route, Routes } from "react-router-dom"

import MainPage from "./pages/MainPage"
import CardPage from "./pages/CardPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:id" element={<CardPage />} />
    </Routes>
  )
}

export default App
