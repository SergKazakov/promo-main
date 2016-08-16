import invariant from "invariant"
import Hero from "../../Hero"
import Features from "../../Features"
import About from "../../About"
import Services from "../../Services"
import Works from "../../Works"
import Contact from "../../Contact"
import Stats from "../../Stats"
import Pricing from "../../Pricing"
import Clients from "../../Clients"
import Blog from "../../Blog"
import Promo from "../../Promo"

const {
  oneOfType,
  string,
  object,
  element,
  array,
} = React.PropTypes

const Page = ({ __filename, head }, { metadata }) => {
  invariant(
    typeof head.title === "string",
    `Your page '${ __filename }' needs a title`
  )

  const metaTitle = head.metaTitle ? head.metaTitle : head.title
  const { pkg: { homepage } } = metadata
  const { keywords, description } = head
  const logoSrc = require("!!file?name=[name].[ext]!../../About/about.jpg")
  const logo = `${homepage}${logoSrc}`

  const meta = [
    { name: "keywords", content: keywords },
    { name: "description", content: description },
    { property: "og:locale", content: "en_US" },
    { property: "og:type", content: "website" },
    { property: "og:title", content: metaTitle },
    { property: "og:description", content: description },
    { property: "og:url", content: homepage },
    { property: "og:site_name", content: "EmberMVP" },
    { property: "og:image", content: logo },
    { property: "og:image:width",  content: "229" },
    { property: "og:image:height",  content: "52" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:site", content: "@embermvp" },
    { name: "twitter:domain", content: "EmberMVP" },
    { name: "twitter:image:src", content: logo },
  ]

  return (
    <div>
      <Helmet
        title={ metaTitle }
        meta={ meta }
      />
      <Hero />
      <Features />
      <About />
      <Services />
      <Works />
      <Stats />
      <Pricing />
      <Clients />
      <Blog />
      <Contact />
      <Promo />
    </div>
  )
}

Page.propTypes = {
  children: oneOfType([ array, object ]),
  __filename: string.isRequired,
  __url: string.isRequired,
  head: object.isRequired,
  body: string.isRequired,
  header: element,
  footer: element,
}

Page.contextTypes = {
  metadata: object.isRequired,
}

export default Page
