import Svg from "react-svg-inline"
import styles from "./index.css"

const social = [
  {
    name: "facebook",
    url: "/",
  },
  {
    name: "twitter",
    url: "/",
  },
  {
    name: "google",
    url: "/",
  },
  {
    name: "rss",
    url: "/",
  },
  {
    name: "linkedin",
    url: "/",
  },
  {
    name: "skype",
    url: "/",
  },
  {
    name: "vimeo",
    url: "/",
  },
  {
    name: "tumblr",
    url: "/",
  },
]

const Social = () => (
  <ul className={ styles.social }>
    {
      social.map(({ name, url }, index) => {
        return (
          <li key={ index } className={ styles.socialItem }>
            <a href={ url } className={ styles.socialLink }>
              <Svg
                className={ styles.socialSvg }
                svg={ require(`./${name}.svg`) }
                width="2rem"
                height="2rem"
              />
            </a>
          </li>
        )
      })
    }
  </ul>
)

export default Social
