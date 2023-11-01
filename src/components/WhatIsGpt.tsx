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

const WhatIsGpt = () => {
  return (
    <section id="GPT" className="bg-secondary max-w-[1170px] min-h-[695px] px-[73px] py-[74px]">
      <article className="flex justify-between ">
        <TitleWithBars content="What is GPT-3"/>
        <Descriptions content="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." addStyles="max-w-[731px] text-[16px] leading-[30px] font-[500] pr-2 mt-4"/>
      </article>

      <div className="my-[91px] flex justify-between items-center">
        <GradientTitle content="The possibilities are beyond your imagination" addStyles="text-[34px] max-w-[472px]"/>
        <ClickableText content="Explore The Library"/>
      </div>

      <div className="flex">
        {
          articles.map(({title, description}, index)=>(
              <article key={index} className="flex flex-col">
                <TitleWithBars content={title}/>
                <Descriptions content={description}addStyles="max-w-[334px] text-[16px] leading-[30px] font-[500] pr-3 mt-4"/>
              </article>
          ))
        }
      </div>

    </section>
  )
}

export default WhatIsGpt
