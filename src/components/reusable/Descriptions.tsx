interface Props {
    content: string
    addStyles?:string
}

const Descriptions:React.FC<Props> = ({content, addStyles}) => {
  return (
    <p className={`text-descriptions   ${addStyles ? addStyles:"text-xs leading-7  font-normal md:text-left md:text-lg lg:text-xl  lg:leading-normal max-w-[554px]"}`}>{content}</p>
  )
}

export default Descriptions
