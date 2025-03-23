import css from "./index.css"

export const Link = ({ type = "primary", to, children }) => (
  <a className={css[type]} href={to}>
    {children}
  </a>
)
