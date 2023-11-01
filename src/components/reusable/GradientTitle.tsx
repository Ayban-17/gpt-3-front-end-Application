interface Props {
    content: string
    addStyles?:string
}
const GradientTitle:React.FC<Props> = ({content, addStyles}) => {
  return (
    <h1 className={`${addStyles? addStyles:"text-[62px] -tracking-[3.48px] leading-[75px]"} font-bold title-gradient`}>{content}</h1>
  )
}

export default GradientTitle
