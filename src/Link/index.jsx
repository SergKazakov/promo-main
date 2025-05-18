import * as css from "./index.module.css"

export const Link = ({ type = "primary", to, children }) => (
  <a className={css[type]} href={to}>
    {children}
  </a>
)
