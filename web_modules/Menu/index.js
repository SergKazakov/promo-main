import { slide as Menu } from "react-burger-menu"
import { Link } from "react-router"
import { Link as ScrollLink } from "react-scroll"
import Radium from "radium"
import "./index.global.css"
import links from "../Nav/links.json"

const RadiumLink = Radium(Link)
const RadiumScrollLink = Radium(ScrollLink)

export default () => (
  <Menu>
    <ul className={ 'bm-list' }>
      {
        links.map(({ title, url }, index) => {
          const props = {
            className: "bm-list__link",
            to: url,
            ...index && {
              smooth: true,
              duration: 2000,
            },
          }

          if (!index) return (
            <li key={ index } className={ 'bm-list__item' }>
              <RadiumLink { ...props }>
                { title }
              </RadiumLink>
            </li>
          )

          return (
            <li key={ index } className={ 'bm-list__item' }>
              <RadiumScrollLink { ...props }>
                { title }
              </RadiumScrollLink>
            </li>
          )
        })
      }
    </ul>
  </Menu>
)
