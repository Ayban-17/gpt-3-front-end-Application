import Header from "./components/Header"
import Hero from "./components/Hero"

const App:React.FC = () => {
  return (
    <div className=' max-w-[1440px] px-[135px] text-white'>
      <Header/>
      <Hero/>
    </div>
  )
}

export default App
