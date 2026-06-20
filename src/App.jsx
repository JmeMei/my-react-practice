// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function Welcome() {
  return <h2>Welcome, Jamie!</h2> 
}

function Button() {
  return <button>Click Me</button>
}

function App() {
  // const [count, setCount] = useState(0)

  return (
   <div>
     <h1>Codevolution React Course</h1>
      <Welcome />
      <Button />
   </div>
  )
}

export default App
