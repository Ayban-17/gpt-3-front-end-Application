import ai from "../assets/ai.png"
import people from "../assets/people.png"
import CTAbtn from "./reusable/CTAbtn"

const Hero:React.FC = () => {
  return (
    <section className="grid grid-cols-2 lg:relative ">
      <div className=" flex flex-col gap-8 lg:mt-12">
        <h1 className="text-[62px] font-bold leading-[75px] -tracking-[3.48px] title-gradient">Let's Build Something amazing with GPT-3 Open AI</h1>
        <p className="text-descriptions text-xl font-normal leading-normal">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className="flex">
            <input type="text" placeholder="Your Email Address" className="bg-input-bg flex-1 px-8"/>
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
