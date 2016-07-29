import Button from "../../Button"
import styles from "./index.css"

const {
  string,
  array,
  oneOf,
} = React.PropTypes

const Item = ({ title, price, list, url, type="primary" }) => {
  const isPrimary = type === "primary"

  const buttonProps = {
    to: url,
    ...isPrimary && { type: "gray" },
  }

  return (
    <div className={ styles[`${type}Wrapper`] }>
      <div className={ styles.inner }>
        <header className={ styles.header }>
          <h3 className={ styles.title }>{ title }</h3>
          <span className={ styles.price }>
            { `$${price}` }
            <span className={ styles.priceText }>{ 'per month' }</span>
          </span>
        </header>
        <ul className={ styles.list }>
          {
            list.map((item, index) => (
              <li key={ index } className={ styles.listItem }>{ item }</li>
            ))
          }
        </ul>
        <footer className={ styles.footer }>
          <Button { ...buttonProps }>{ 'Choose plan' }</Button>
        </footer>
      </div>
    </div>
  )
}

Item.propTypes = {
  url: string.isRequired,
  title: string.isRequired,
  price: string.isRequired,
  list: array.isRequired,
  type: oneOf([ "primary", "premium" ]),
}

export default Item
