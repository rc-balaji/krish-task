import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bar from './Bar'
// import Therm from './Therm'

function App() {
  const [count, setCount] = useState(0)
  const [para, setPara] = useState(Array.from({ length: 200 }, () => Math.floor(Math.random() * 101)))




  return (
    <div>
      <Bar title={"Battery"} values={para} unit={"%"} />
      {/* <Therm title={"Temperature"} values={para} unit={"℃"} /> */}
    </div>
  )
}

export default App
