interface Props {
    content: string
    addStyles?:string
}
const ClickableText:React.FC<Props> = ({content, addStyles}) => {
  return (
    <a href="#" className={`text-[16px] font-[500] leading-[30px] ${addStyles? addStyles:"text-red"} `}>{content}</a>
  )
}

export default ClickableText
