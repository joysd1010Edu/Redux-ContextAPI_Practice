import { useState } from 'react'
import Count from './Counter-Context/Count'
import RE_counter from './Counter-Redux/RE_counter'
import Zustand_Counter from './ZustandCounter/Zustand_Counter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="py-10 mx-auto text-center">
      <div className=' flex flex-col gap-10' >
         <Count />
      ==============================
      <RE_counter/>
      ==============================
      <Zustand_Counter/>
      </div>
     
    </div>
  )
}

export default App
