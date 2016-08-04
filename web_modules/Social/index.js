import Svg from "react-svg-inline"
import styles from "./index.css"
import social from "./social.json"

const Social = () => (
  <ul className={ styles.social }>
    {
      social.map(({ name, url }, index) => (
          <li key={ index } className={ styles.socialItem }>
            <a
              href={ url }
              className={ styles.socialLink }
              target={ "_blank" }
            >
              <Svg
                className={ styles.socialSvg }
                svg={ require(`./${name}.svg`) }
                width="2rem"
                height="auto"
              />
            </a>
          </li>
        )
      )
    }
  </ul>
)

export default Social
