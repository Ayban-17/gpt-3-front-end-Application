interface Props {
    content: string
    addStyles?:string
}

const Descriptions:React.FC<Props> = ({content, addStyles}) => {
  return (
    <p className={`text-descriptions font-normal leading-normal max-w-[554px] ${addStyles ? addStyles:"text-xl "}`}>{content}</p>
  )
}

export default Descriptions
