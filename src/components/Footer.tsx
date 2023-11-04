import GradientTitle from "./reusable/GradientTitle"

import logo from "../assets/logo.svg"

const Footer = () => {
  return (
    <footer className='w-screen bg-footer-bg mt-[155.06px] flex flex-col items-center md:pt-[175px] py-16 px-4 lg:px-[206px]'>
        <GradientTitle content="Do you want to step in to the future before others" addStyles="text-center text-4xl md:text-[62px] md:-tracking-[3.48px] md:leading-[75px] md:max-w-[821px]"/>
        <button className="text-[18px] font-normal leading-normal border-2 py-[22px] px-[24px] mt-[64px]"> Request Early Access</button>
        <div className="mt-16 md:mt-[185px] w-full flex flex-col md:flex-row gap-8 justify-between pl-16 md:pl-0 mb-[83px]">
            <div className="max-w-[168px] text-[12px] font-normal leading-normal ">
                <img src={logo} alt="logo" />
                <p className="mt-8">Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
            </div>
            <div className="flex flex-col gap-4 w-fit">
                <h1 className="font-bold mb-4">Links</h1>
                <a href="" className="text-xs w-fit">Overons</a>
                <a href="" className="text-xs w-fit">Social Media</a>
                <a href="" className="text-xs w-fit">Counters</a>
                <a href="" className="text-xs w-fit">Contact</a>
            </div>
            <div className="flex flex-col gap-4 w-fit mb-4">
                <h1 className="font-bold">Company</h1>
                <a href="" className="text-xs w-fit">Terms & Condition</a>
                <a href="" className="text-xs w-fit">Privacy Policy</a>
                <a href="" className="text-xs w-fit">Contact</a>
            </div>
            <div className="flex flex-col gap-4 w-fit  ">
                <h1 className="font-bold">Get in Touch</h1>
                <a href="" className="text-xs w-fit">Crechterwoord K12 182 DK Alknjkcb</a>
                <a href="" className="text-xs w-fit">085-132567</a>
                <a href="" className="text-xs w-fit">info@payme.net</a>
            </div>
        </div>
        <p className="text-xs">© 2021 GPT-3. All rights reserved.</p>
    </footer>
  )
}

export default Footer
