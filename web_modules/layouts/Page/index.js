import invariant from "invariant"
import Hero from "../../Hero"
import Features from "../../Features"
import About from "../../About"
import Services from "../../Services"
import Works from "../../Works"
import Study from "../../Study"
import Contact from "../../Contact"
import Stats from "../../Stats"
import Pricing from "../../Pricing"
import Team from "../../Team"
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

const Page = (props) => {
  const {
    __filename,
    head,
  } = props

  invariant(
    typeof head.title === "string",
    `Your page '${ __filename }' needs a title`
  )

  const metaTitle = head.metaTitle ? head.metaTitle : head.title

  const meta = [
    { name: "keywords", content: head.keywords },
    { name: "description", content: head.description },
    { property: "og:locale", content: "en_US" },
    { property: "og:type", content: "website" },
    { property: "og:title", content: metaTitle },
    { property: "og:description", content: head.description },
    { property: "og:url", content: "https://embermvp.com" },
    { property: "og:site_name", content: "EmberMVP" },
    { property: "og:image", content: "https://embermvp.com/img/logo.png" },
    { property: "og:image:width",  content: "310" },
    { property: "og:image:height",  content: "310" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:description", content: head.description },
    { name: "twitter:site", content: "@embermvp" },
    { name: "twitter:domain", content: "EmberMVP" },
    { name: "twitter:image:src", content: "https://embermvp.com/img/logo.png" },
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
      <Study />
      <Stats />
      <Pricing />
      <Team />
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
