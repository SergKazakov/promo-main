import Svg from "react-svg-inline"
import css from "./index.css"
import social from "./social.json"

const Social = () => (
  <ul className={ css.social }>
    {
      social.map(({ name, url }, index) => (
          <li key={ index } className={ css.socialItem }>
            <a
              href={ url }
              className={ css.socialLink }
              target={ "_blank" }
            >
              <Svg
                className={ css.socialSvg }
                svg={ require(`./${name}.svg`) }
                width="2rem"
              />
            </a>
          </li>
        )
      )
    }
  </ul>
)

export default Social
