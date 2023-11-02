import ai from "../assets/ai.png"
import people from "../assets/people.png"
import CTAbtn from "./reusable/CTAbtn"
import Descriptions from "./reusable/Descriptions"
import GradientTitle from "./reusable/GradientTitle"

const Hero:React.FC = () => {
  return (
    <section className="grid lg:grid-cols-2 lg:relative lg:mb-24" id="hero">
      <div className=" flex flex-col gap-8 lg:mt-12">
        <GradientTitle content="Let's Build Something amazing with GPT-3 Open AI"/>
        <Descriptions content="Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of."/>
        <div className="flex">
            <input type="text" placeholder="Your Email Address" className="bg-input-bg flex-1 px-8 md:py-4 placeholder-placeholder-color focus:outline-none"/>
            <CTAbtn content="Get Started" addStyles="rounded-tr rounded-br py-4"/>
        </div>
        <div className="flex flex-col items-center gap-2 md:flex-row md:justify-center">
           <img src={people} alt="people" />
           <Descriptions content="1,600 people requested access a visit in last 24 hours" addStyles="text-white text-xs"/>
        </div>
      </div>
      <img src={ai} alt="ai" className="mt-8 lg:w-[667.41px] lg:h-[701.59px] lg:absolute lg:-top-12 lg:-right-32"/>
    </section>
  )
}

export default Hero
