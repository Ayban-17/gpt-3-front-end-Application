import ALotIsHappening from "./components/ALotIsHappening"
import Brands from "./components/Brands"
import FutureIsNow from "./components/FutureIsNow"
import Header from "./components/Header"
import Hero from "./components/Hero"
import RegisterToday from "./components/RegisterToday"
import ThePossibilities from "./components/ThePossibilities"
import WhatIsGpt from "./components/WhatIsGpt"

const App:React.FC = () => {
  return (
    <div className=' max-w-[1440px] px-[135px] text-white'>
      <Header/>
      <Hero/>
      <Brands/>
      <WhatIsGpt/>
      <FutureIsNow/>
      <ThePossibilities/>
      <RegisterToday/>
      <ALotIsHappening/>
    </div>
  )
}

export default App
