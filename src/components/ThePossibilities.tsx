import possibility from "../assets/possibility.png"
import ClickableText from "./reusable/ClickableText"
import Descriptions from "./reusable/Descriptions"
import GradientTitle from "./reusable/GradientTitle"

const ThePossibilities = () => {
  return (
    <section id="caseStudies" className="mt-[55px] grid grid-cols-2">
      <img src={possibility} alt="possibility" />
      <div className="self-end flex flex-col gap-2">
        <ClickableText content="Request Early Access to get Started" addStyles="text-[#71e5ff]"/>
        <GradientTitle content="The possibilities are beyond your imagination" addStyles="text-[34px] leading-[45px]"/>
        <Descriptions content="Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of." addStyles="text-[16px] font-[400] leading-[30px]"/>
        <ClickableText content="Request Early Access to get Started" addStyles="text-red mt-8"/>
      </div>
    </section>
  )
}

export default ThePossibilities
