import logo from "../assets/logo.svg"

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
        destination:"#GPT"
    },
    {
        name:"Open AI",
        destination:"#openAI"
    },
    {
        name:"Case Studies",
        destination:"#caseStudies"
    },
    {
        name:"Library",
        destination:"Library"
    }
]

const Header:React.FC = () => {
  return (
    <header className="py-[55px] text-[18px] " id="header">
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
            <a href="#" className="bg-cta px-11 py-4">Sign up</a>
        </div>
      </nav>
    </header>
  )
}

export default Header
