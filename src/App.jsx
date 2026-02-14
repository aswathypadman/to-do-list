 import './App.css'
import Calendar from './Calendar'
import TaskBoard from './TaskBoard'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/taskboard/:formattedDate" element={<TaskBoard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App