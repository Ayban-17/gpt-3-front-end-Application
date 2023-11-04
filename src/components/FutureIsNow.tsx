import ClickableText from "./reusable/ClickableText"
import Descriptions from "./reusable/Descriptions"
import GradientTitle from "./reusable/GradientTitle"
import TitleWithBars from "./reusable/TitleWithBars"

interface Articles {
    title: string
    description: string
}

const articles:Articles[] =[
    {
        title: "Improving end distrusts instantly ",
        description:"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
    },
    {
        title:"Become the tended active",
        description:"Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
    },
    {
        title:"Message or am nothing",
        description:"Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
    },
    {
        title:"Really boy law county",
        description:"Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
    }
]

const FutureIsNow:React.FC = () => {
  return (
    <section id="openAI" className="mt-[201px] grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex flex-col gap-8 mb-10">
            <GradientTitle content="The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen." addStyles="text-[34px] font-extrabold leading-[45px] lg:max-w-[426px]"/>
            <ClickableText content="Request Early Access to Get Started"/>
        </div>
        <div className="flex flex-col gap-10">
           {
            articles.map(({title, description}, index)=>(
                <article className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-[250px_334px]" key={index}>
                    <TitleWithBars content={title} addStyles="text-[18px] leading-[24px] md:mt-4 lg:mt-0 -tracking-[0.72px] pr-24"/>
                    <Descriptions content={description} addStyles="text-[14px] font-[500] leading-[24px] "/>
                </article>
            ))
           }
        </div>
    </section>
  )
}

export default FutureIsNow
