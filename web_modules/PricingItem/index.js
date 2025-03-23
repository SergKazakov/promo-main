import css from "./index.css"
import { Link } from "../Link"

export const PricingItem = ({ title, price, list, type }) => (
  <div className={css.wrapper}>
    <div className={css.inner}>
      <header className={css.header}>
        <h3 className={css.title}>{title}</h3>
        <span className={css.price}>
          {`$${price}`}
          <span className={css.priceText}>{"per hour"}</span>
        </span>
      </header>
      <ul className={css.list}>
        {list.map((it, index) => (
          <li key={index} className={css.listItem}>
            {it}
          </li>
        ))}
      </ul>
      <footer className={css.footer}>
        <Link type={type} to="#contact">
          Choose plan
        </Link>
      </footer>
    </div>
  </div>
)
