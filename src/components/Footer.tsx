import GradientTitle from "./reusable/GradientTitle"

import logo from "../assets/logo.svg"

const Footer = () => {
  return (
    <footer className='w-screen bg-footer-bg mt-[155.06px] flex flex-col items-center pt-[175px] px-[206px]'>
        <GradientTitle content="Do you want to step in to the future before others" addStyles="text-center text-[62px] -tracking-[3.48px] leading-[75px] max-w-[821px]"/>
        <button className="text-[18px] font-normal leading-normal border-2 py-[22px] px-[24px] mt-[64px]"> Request Early Access</button>
        <div className="mt-[185px] w-full flex justify-between flex-wrap mb-[83px]">
            <div className="max-w-[168px] text-[12px] font-normal leading-normal ">
                <img src={logo} alt="logo" />
                <p className="mt-8">Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="font-bold mb-4">Links</h1>
                <a href="" className="text-xs">Overons</a>
                <a href="" className="text-xs">Social Media</a>
                <a href="" className="text-xs">Counters</a>
                <a href="" className="text-xs">Contact</a>
            </div>
            <div className="flex flex-col gap-4 mb-4">
                <h1 className="font-bold">Company</h1>
                <a href="" className="text-xs">Terms & Condition</a>
                <a href="" className="text-xs">Privacy Policy</a>
                <a href="" className="text-xs">Contact</a>
            </div>
            <div className="flex flex-col gap-4  ">
                <h1 className="font-bold">Get in Touch</h1>
                <a href="" className="text-xs">Crechterwoord K12 182 DK Alknjkcb</a>
                <a href="" className="text-xs">085-132567</a>
                <a href="" className="text-xs">info@payme.net</a>
            </div>
        </div>
        <p className="text-xs">© 2021 GPT-3. All rights reserved.</p>
    </footer>
  )
}

export default Footer
