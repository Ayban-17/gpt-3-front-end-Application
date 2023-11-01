interface Props {
    content: string
    addStyles?:string
}
const GradientTitle:React.FC<Props> = ({content, addStyles}) => {
  return (
    <h1 className={`${addStyles? addStyles:"text-[62px]"} font-bold leading-[75px] -tracking-[3.48px] title-gradient`}>{content}</h1>
  )
}

export default GradientTitle
