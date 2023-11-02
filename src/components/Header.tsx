import logo from "../assets/logo.svg"
import CTAbtn from "./reusable/CTAbtn"

interface Navigations {
    name:string,
    destination:string
}

const navigations: Navigations[] = [
    {
        name:"Home",
        destination:"#header"
    },
    {
        name:"What is GPT",
        destination:"GPT"
    },
    {
        name:"Open AI",
        destination:"openAI"
    },
    {
        name:"Case Studies",
        destination:"caseStudies"
    },
    {
        name:"Library",
        destination:"library"
    }
]
const Header:React.FC = () => {
  return (
    <header className="py-[55px] text-[18px]" id="header">
      <nav className="flex justify-between">
        <div className="flex gap-[68.78px] items-center">
            <img src={logo} alt="logo" className="w-[62.557px] h-[16.016px]"/>
            <div className="flex gap-[46px]">
                {navigations.map(({name, destination}, index)=>(
                    <a key={index} href={`#${destination}`}> {name}</a>
                ))}
            </div>
        </div>
        <div className="flex gap-[26px] items-center">
            <a href="#">Sign in</a>
            <CTAbtn content="Sign up"/>
        </div>
      </nav>
    </header>
  )
}

export default Header
