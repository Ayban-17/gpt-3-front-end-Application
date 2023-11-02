import GradientTitle from "./reusable/GradientTitle"

import blog01 from "../assets/blog01.png"
import blog02 from "../assets/blog02.png"
import blog03 from "../assets/blog03.png"
import blog04 from "../assets/blog04.png"
import blog05 from "../assets/blog05.png"

interface Blogs {
    img: string
    date: string
    title: string 
    text: string
}

const blogs:Blogs[]=[
    {
        img: blog01,
        date: "Sep 26, 2021",
        title:" GPT-3 and Open AI is the future. Let us explore how it is",
        text:"Read Full Article"
    },
    {
        img: blog02,
        date: "Sep 26, 2021",
        title:" GPT-3 and Open AI is the future. Let us explore how it is",
        text:"Read Full Article"
    },
    {
        img: blog03,
        date: "Sep 26, 2021",
        title:" GPT-3 and Open AI is the future. Let us explore how it is",
        text:"Read Full Article"
    },
    {
        img: blog04,
        date: "Sep 26, 2021",
        title:" GPT-3 and Open AI is the future. Let us explore how it is",
        text:"Read Full Article"
    },
    {
        img: blog05,
        date: "Sep 26, 2021",
        title:" GPT-3 and Open AI is the future. Let us explore how it is",
        text:"Read Full Article"
    },
]

const ALotIsHappening = () => {
  return (
    <section id="library" className="mt-[183.25px]">
        <GradientTitle content="A lot is happening, We are blogging about it." addStyles="max-w-[701px] text-[62px] leading-[75px] -tracking-[2.48px] p-4"/>
        <div className="mt-[115.79px] grid grid-cols-[417px_327.34px_327.34px] gap-[49.51px]">
            {
                blogs.map(({img, date, title, text}, index)=>(
                    <article key={index} className={`${img === blog01 ? "row-span-2":""} bg-secondary `}>
                        <img src={img} alt={title} className="bg-primary"/>
                        <div className={`flex flex-col justify-between ${img === blog01 ? "px-[25.63px] py-[32.62px] min-h-[407.27px]":"px-[17px] py-[13.98px] min-h-[193.37px]"}`}>
                            <div className="flex flex-col">
                                <time className="text-[11.649px] font-[700] leading-[34.947px]">{date}</time>
                                <h1 className={` ${img === blog01? "text-[25.11px]":"text-[19.315px]"} text-[25.11px] font-extrabold leading-[30.287px]`}>{title}</h1>
                            </div>
                            <a href="#" className="text-[11.649px] ">{text}</a>
                        </div>
                    </article>
                ))
            }
        </div>
    </section>
  )
}

export default ALotIsHappening
