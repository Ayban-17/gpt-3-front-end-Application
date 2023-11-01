interface Props {
    content: string
    addStyles?:string
}

const Descriptions:React.FC<Props> = ({content, addStyles}) => {
  return (
    <p className={`text-descriptions text-xl font-normal leading-normal max-w-[554px] ${addStyles}`}>{content}</p>
  )
}

export default Descriptions
