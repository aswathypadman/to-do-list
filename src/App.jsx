import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calendar from './Calendar'
import Activity from './Activity'
import TaskBoard from './Taskboard'
import Ongoing from './Ongoing'
import Completed from './Completed'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         {/* <Calendar/> */}
        {/* <Activity/>  */}
        {/* <TaskBoard/> */}
        {/* <Ongoing/> */}
        {/* <Completed/> */}
        <TaskBoard/>
         
      </div>
       
    </>
  )
}

export default App
