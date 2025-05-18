import { Link } from "../Link"

import * as css from "./index.module.css"

export const PricingItem = ({ title, price, list, type }) => (
  <div className={css.wrapper}>
    <div className={css.inner}>
      <header className={css.header}>
        <h3 className={css.title}>{title}</h3>
        <span className={css.price}>
          {`$${price}`}
          <span className={css.priceText}>per hour</span>
        </span>
      </header>
      <ul className={css.list}>
        {list.map((it, index) => (
          <li className={css.listItem} key={index}>
            {it}
          </li>
        ))}
      </ul>
      <footer className={css.footer}>
        <Link to="#contact" type={type}>
          Choose plan
        </Link>
      </footer>
    </div>
  </div>
)
