 import './App.css'
import Calendar from './Calendar'
import TaskBoard from './TaskBoard'
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
 
import Navigation from './Navigation';
function App() {
  return (
    
    <BrowserRouter>
    {/* <Navigation/> */}
      <Routes>
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/taskboard/:formattedDate" element={<TaskBoard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App