interface Props {
    content: string
    addStyles?:string
}


const TitleWithBars:React.FC<Props> = ({content, addStyles}) => {
  return (
    <div className={`flex flex-col ${addStyles? addStyles:""}`}>
        <div className="w-[38px] h-[3px] bg-gradient-to-br from-[#ae67fa] to-[#f49867]"></div>
        <h2 className="text-2xl font-extrabold tracking-[-0.96px] leading-[75px]">{content}</h2>
    </div>
  )
}

export default TitleWithBars
