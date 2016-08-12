import { Link as ScrollLink } from "react-scroll"
import css from "./index.css"

const {
  string,
  bool,
} = React.PropTypes

const Item = ({ to, text, title, category, img, smooth=false }) => (
  <div
    className={ css.item }
    style={ { backgroundImage: `url(${img})` } }
  >
    {
      smooth
      ?
        <ScrollLink
          to={ to }
          smooth
          duration={ 2000 }
          className={ css.overlay }
        >
          <p className={ css.text }>{ text }</p>
          <h3 className={ css.title }>{ title }</h3>
          <span className={ css.category }>{ category }</span>
        </ScrollLink>
      :
        <a href={ to } className={ css.overlay }>
          <p className={ css.text }>{ text }</p>
          <h3 className={ css.title }>{ title }</h3>
          <span className={ css.category }>{ category }</span>
        </a>
    }
  </div>
)

Item.propTypes = {
  to: string.isRequired,
  text: string.isRequired,
  title: string.isRequired,
  category: string.isRequired,
  img: string.isRequired,
  smooth: bool,
}

export default Item
