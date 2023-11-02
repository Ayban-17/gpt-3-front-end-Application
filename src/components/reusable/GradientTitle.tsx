interface Props {
    content: string
    addStyles?:string
}
const GradientTitle:React.FC<Props> = ({content, addStyles}) => {
  return (
    <h1 className={`${addStyles? addStyles:"text-3xl leading-[45px]  md:text-[62px] md:-tracking-[3.48px] md:leading-[75px] "} font-bold title-gradient`}>{content}</h1>
  )
}

export default GradientTitle
