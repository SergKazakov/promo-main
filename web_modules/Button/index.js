import { Link } from "react-router"
import classnames from "classnames"
import styles from "./index.css"

const {
  string,
  oneOf,
} = React.PropTypes

const Button = ({ type="primary", to, className, children }) => {
  const isLink = to && to !== undefined

  const props = {
    className: classnames(styles[type], className),
    ...isLink && { to },
  }

  if (isLink) return <Link { ...props }>{ children }</Link>

  return <button { ...props }>{ children }</button>
}

Button.propTypes = {
  type: oneOf([ "primary", "gray", "ghost" ]),
  to: string,
}

export default Button
