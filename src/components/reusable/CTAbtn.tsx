interface Props {
    content:string
    addStyles?:string
}
const CTAbtn:React.FC<Props> = ({content, addStyles}) => {
  return (
    <a href="#" className={`bg-cta px-4 py-2 text-center md:px-6 md:py-4 lg:px-11 ${addStyles}`}>{content}</a>
  )
}

export default CTAbtn
