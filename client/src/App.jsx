import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SideBar } from './Components/SideBar/SideBar.component'
import { Outlet } from 'react-router'
import { DialogueGeneration } from './Components/Dailogue Generation/DialogueGeneration.component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="dashboard-layout">
            <SideBar/>
            <div className="content">
                <Outlet/>
            </div>
        </div>
  )
}

export default App
