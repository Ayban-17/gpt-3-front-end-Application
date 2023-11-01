interface Props {
    content: string
    addStyles?:string
}

const Descriptions:React.FC<Props> = ({content, addStyles}) => {
  return (
    <p className={`text-descriptions  max-w-[554px] ${addStyles ? addStyles:"text-xl font-normal leading-normal"}`}>{content}</p>
  )
}

export default Descriptions
