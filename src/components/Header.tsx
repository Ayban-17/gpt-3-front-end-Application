import { useState } from "react"
import {FaBars} from "react-icons/fa"
import {RxCross2} from "react-icons/rx"

import logo from "../assets/logo.svg"
import CTAbtn from "./reusable/CTAbtn"

interface Navigations {
    name:string,
    destination:string
}

const navigations: Navigations[] = [
    {
        name:"Home",
        destination:"header"
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
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const openMenu = () => {
        setIsOpen(true)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

  return (
    <header className="py-8 text-sm  lg:py-[55px] md:text-[18px]" id="header">
      <nav className="flex justify-between items-center">
        <div className="lg:flex lg:gap-[68.78px] lg:items-center">
            <img src={logo} alt="logo" className="w-24 lg:w-[62.557px] lg:h-[16.016px]"/>
            {/* DESKTOP NAV  */}
            <div className="hidden lg:flex lg:gap-[46px]">
                {navigations.map(({name, destination}, index)=>(
                    <a key={index} href={`#${destination}`}> {name}</a>
                ))}
            </div>
        </div>
        <div className="flex gap-[26px] items-center">
            <a href="#">Sign in</a>
            <CTAbtn content="Sign up"/>
            <div className="text-xl md:text-2xl cursor-pointer lg:hidden" onClick={openMenu}>
                <FaBars/>
            </div>
        </div>
        {/* MOBILE NAV  */}
        <div className={`flex flex-col text-2xl gap-6 p-8  absolute h-screen w-5/6 md:w-1/2 backdrop-blur-xl top-0 duration-1000 ${isOpen? "right-0":"-right-[100vw]"} lg:hidden `}>
                <div className="self-end cursor-pointer " onClick={closeMenu}>
                    <RxCross2/>
                </div>
                {navigations.map(({name, destination}, index)=>(
                    <a key={index} href={`#${destination}`}> {name}</a>
                ))}
        </div>
      </nav>
    </header>
  )
}

export default Header
