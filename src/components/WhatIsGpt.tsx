import ClickableText from "./reusable/ClickableText"
import Descriptions from "./reusable/Descriptions"
import GradientTitle from "./reusable/GradientTitle"
import TitleWithBars from "./reusable/TitleWithBars"

interface Article {
  title: string
  description: string
}

const articles:Article[] =[
  {
    title: "Chatbots",
    description:"We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
  },
  {
    title:"Knowledgebase",
    description:"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"
  },
  {
    title:"Education",
    description:"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments "
  }
] 

const WhatIsGpt:React.FC = () => {
  return (
    <section id="GPT" className="bg-secondary max-w-[1170px] min-h-[695px] p-10 md:px-[73px] md:py-[74px]">
      <article className="flex flex-col lg:flex-row justify-between text-justify lg:text-left">
        <TitleWithBars content="What is GPT-3"/>
        <Descriptions content="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." addStyles="max-w-[731px] text-[16px] leading-[30px] font-[500] pr-2 mt-4"/>
      </article>

      <div className="my-[50px] lg:my-[91px] flex flex-col gap-12 lg:justify-between lg:items-center lg:flex-row ">
        <GradientTitle content="The possibilities are beyond your imagination" addStyles="text-xl md:text-[34px] lg:max-w-[472px] leading-[50px]"/>
        <ClickableText content="Explore The Library"/>
      </div>

      <div className="flex flex-col gap-20 lg:flex-row">
        {
          articles.map(({title, description}, index)=>(
              <article key={index} className="flex flex-col md:flex-row md:justify-between lg:flex-col">
                <TitleWithBars content={title}/>
                <Descriptions content={description}addStyles="max-w-[334px] text-[16px] lg:leading-[30px] font-[500] lg:pr-3 mt-4"/>
              </article>
          ))
        }
      </div>

    </section>
  )
}

export default WhatIsGpt
