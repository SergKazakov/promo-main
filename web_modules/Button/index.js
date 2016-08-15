import { Link } from "react-router"
import classnames from "classnames"
import css from "./index.css"

const {
  string,
  oneOf,
  bool,
} = React.PropTypes

const Button = ({ type, to, className, disabled, children }) => {
  const isLink = to && to !== undefined

  const props = {
    disabled,
    className: classnames(css[type], className),
    ...isLink && { to },
  }

  return isLink
  ?
    <Link { ...props }>{ children }</Link>
  :
    <button { ...props }>{ children }</button>
}

Button.propTypes = {
  type: oneOf([ "primary", "gray", "ghost" ]),
  to: string,
  disabled: bool,
}

Button.defaultProps = {
  type: "primary",
  disabled: false,
}

export default Button
