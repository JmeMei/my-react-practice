// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { Welcome } from './Welcome'
import { Button } from './Button'
import {CandidateProfile} from './CandidateProfile'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
   <div>
     <h1>Codevolution React Course</h1>
      <Welcome />
      <Button />
      <CandidateProfile />
   </div>
  )
}

export default App
