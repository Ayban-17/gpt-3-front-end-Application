import ClickableText from "./reusable/ClickableText"

const RegisterToday = () => {
  return (
    <section className="mt-[154.78px] register-today p-[46px] ">
        <ClickableText content="Request Early Access to Get Started" addStyles="text-white"/>
        <div className="flex justify-between items-center">
            <h1 className="text-[24px] leading-[45px] font-extrabold">Register today & start exploring the endless possibilities</h1>
            <button className="bg-black w-[189.136px] h-[59.398px] rounded-[40px] text-[18px] font-[700] leading-[30px]">Get Started</button>
        </div>
    </section>
  )
}

export default RegisterToday
