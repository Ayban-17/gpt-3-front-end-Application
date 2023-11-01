import Brands from "./components/Brands"
import Header from "./components/Header"
import Hero from "./components/Hero"

const App:React.FC = () => {
  return (
    <div className=' max-w-[1440px] px-[135px] text-white'>
      <Header/>
      <Hero/>
      <Brands/>
    </div>
  )
}

export default App
