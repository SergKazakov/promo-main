import { slide as Menu } from "react-burger-menu"
import { Link } from "react-router"
import Radium from "radium"
import "./index.global.css"
import links from "../Nav/links.json"

const RadiumLink = Radium(Link)

export default () => (
  <Menu>
    <ul className={ 'bm-list' }>
      {
        links.map(({ title, url }, index) => (
          <li key={ index } className={ 'bm-list__item' }>
            <RadiumLink className={ 'bm-list__link' } to={ url }>
              { title }
            </RadiumLink>
          </li>
        ))
      }
    </ul>
  </Menu>
)
