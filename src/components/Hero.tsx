import ai from "../assets/ai.png"
import people from "../assets/people.png"
import CTAbtn from "./reusable/CTAbtn"
import GradientTitle from "./reusable/GradientTitle"

const Hero:React.FC = () => {
  return (
    <section className="grid lg:grid-cols-2 lg:relative lg:mb-24">
      <div className=" flex flex-col gap-8 lg:mt-12">
        <GradientTitle content="Let's Build Something amazing with GPT-3 Open AI"/>
        <p className="text-descriptions text-xl font-normal leading-normal">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className="flex">
            <input type="text" placeholder="Your Email Address" className="bg-input-bg flex-1 px-8 placeholder-placeholder-color"/>
            <CTAbtn content="Get Started" addStyles="rounded-tr rounded-br"/>
        </div>
        <div className="flex items-center gap-2">
           <img src={people} alt="people" />
            <p className="text-xs">1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <img src={ai} alt="ai" className="w-[667.41px] h-[701.59px] lg:absolute lg:-top-12 lg:-right-32"/>
    </section>
  )
}

export default Hero
