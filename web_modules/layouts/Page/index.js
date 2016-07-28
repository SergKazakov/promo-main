import invariant from "invariant"
import { BodyContainer, joinUri } from "phenomic"
import Promo from '../../Promo';

const {
  oneOfType,
  string,
  object,
  element,
  array,
} = React.PropTypes

const Page = (props, { metadata }) => {
  const {
    pkg,
  } = metadata

  const {
    __filename,
    __url,
    head,
    body,
  } = props

  invariant(
    typeof head.title === "string",
    `Your page '${ __filename }' needs a title`
  )

  const metaTitle = head.metaTitle ? head.metaTitle : head.title

  const meta = [
    { property: "og:type", content: "article" },
    { property: "og:title", content: metaTitle },
    {
      property: "og:url",
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
    },
    { property: "og:description", content: head.description },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:creator", content: `@${ pkg.twitter }` },
    { name: "twitter:description", content: head.description },
    { name: "description", content: head.description },
  ]

  return (
    <div>
      <Helmet
        title={ metaTitle }
        meta={ meta }
      />
      <BodyContainer>{ body }</BodyContainer>
      { props.children }
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
