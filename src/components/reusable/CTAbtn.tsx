interface Props {
    content:string
    addStyles?:string
}
const CTAbtn:React.FC<Props> = ({content, addStyles}) => {
  return (
    <a href="#" className={`bg-cta px-4 py-2 lg:px-11 lg:py-4 ${addStyles}`}>{content}</a>
  )
}

export default CTAbtn
