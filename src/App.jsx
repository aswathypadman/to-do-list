import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calendar from './Calendar'
import Activity from './Activity'
import TaskBoard from './Taskboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         <Calendar/>
        {/* <Activity/>  */}
        <TaskBoard/>
         
      </div>
       
    </>
  )
}

export default App
