// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { Welcome } from "./Welcome";
import { Button } from "./Button";
import { CandidateProfile } from "./CandidateProfile";
import { Product } from "./Product";
import { Greeting } from "./Greeting";
import { CardWrapper } from "./CardWrapper";
import { UserDetails } from "./UserDetails";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <UserDetails name="Bruce Wayne" isOnline={true} />
      <UserDetails name="Clark Kent" isOnline={false} hideOffline={false} />

      <CardWrapper title="User Profile">
        <p>Bruce Wayne</p>
        <p>batman@jl.com</p>
        <button>Edit Profile</button>
      </CardWrapper>

      <Greeting name="Bruce" message="Good morning" />
      <Greeting name="Jamie" />
      <Greeting name="Diana" />
      <Greeting />

      <h1>Codevolution React Course</h1>
      <Welcome name="Bruce" alias="The Flash" />
      <Welcome name="Jamie" alias="The Hulk" />
      <Welcome name="Diana" alias="The Wonder Woman" />

      <Product
        title="Gaming Laptop"
        price={1299.99}
        inStock={true}
        categories={["Electronics", "Computers", "Gaming"]}
      />

      <Button />
      <CandidateProfile />
    </div>
  );
}

export default App;
