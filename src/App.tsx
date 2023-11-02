import ALotIsHappening from "./components/ALotIsHappening"
import Brands from "./components/Brands"
import Footer from "./components/Footer"
import FutureIsNow from "./components/FutureIsNow"
import Header from "./components/Header"
import Hero from "./components/Hero"
import RegisterToday from "./components/RegisterToday"
import ThePossibilities from "./components/ThePossibilities"
import WhatIsGpt from "./components/WhatIsGpt"

const App:React.FC = () => {
  return (
    <div className='  text-white flex flex-col '>
        <main className="max-w-[1440px] px-[135px] self-center">
          <Header/>
          <Hero/>
          <Brands/>
          <WhatIsGpt/>
          <FutureIsNow/>
          <ThePossibilities/>
          <RegisterToday/>
          <ALotIsHappening/>
        </main>
      <Footer/>
    </div>
  )
}

export default App
