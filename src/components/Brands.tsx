import google from "../assets/google.png"
import slack from "../assets/slack.png"
import atlassian from"../assets/atlassian.png"
import dropbox from "../assets/dropbox.png"
import shopify from "../assets/shopify.png"

const Brands = () => {
  return (
    <section className="flex flex-wrap gap-[46.48px] justify-center my-32 ">
      <img src={google} alt="google" />
      <img src={slack} alt="slack" />
      <img src={atlassian} alt="atlassian" />
      <img src={dropbox} alt="dropbox" />
      <img src={shopify} alt="shopify" />
    </section>
  )
}

export default Brands
