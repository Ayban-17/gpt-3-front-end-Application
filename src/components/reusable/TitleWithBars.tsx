interface Props {
    content: string
    addStyles?:string
}


const TitleWithBars:React.FC<Props> = ({content, addStyles}) => {
  return (
    <div className="flex flex-col">
        <div className="w-[38px] h-[3px] bg-gradient-to-br from-[#ae67fa] to-[#f49867]"></div>
        <h2 className={`${addStyles? addStyles: "text-2xl tracking-[-0.96px] leading-[75px]"}  font-extrabold`}>{content}</h2>
    </div>
  )
}

export default TitleWithBars
