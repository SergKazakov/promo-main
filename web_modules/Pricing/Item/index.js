import { Link as ScrollLink } from "react-scroll"
import css from "./index.css"

const {
  string,
  array,
  oneOf,
} = React.PropTypes

const Item = ({ title, price, list, to, type="primary" }) => {
  const buttonProps = {
    to,
    className: css[`${type}Btn`],
    smooth: true,
    duration: 2000,
  }

  return (
    <div className={ css[`${type}Wrapper`] }>
      <div className={ css.inner }>
        <header className={ css.header }>
          <h3 className={ css.title }>{ title }</h3>
          <span className={ css.price }>
            { `$${price}` }
            <span className={ css.priceText }>{ 'per hour' }</span>
          </span>
        </header>
        <ul className={ css.list }>
          {
            list.map((item, index) => (
              <li key={ index } className={ css.listItem }>{ item }</li>
            ))
          }
        </ul>
        <footer className={ css.footer }>
          <ScrollLink { ...buttonProps }>{ 'Choose plan' }</ScrollLink>
        </footer>
      </div>
    </div>
  )
}

Item.propTypes = {
  to: string.isRequired,
  title: string.isRequired,
  price: string.isRequired,
  list: array.isRequired,
  type: oneOf([ "primary", "premium" ]),
}

export default Item
