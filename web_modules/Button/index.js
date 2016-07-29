import styles from "./index.css"

const {
  oneOf,
} = React.PropTypes

const Button = ({ tag="button", type="primary", children }) => {
  const Tag = tag
  return (
    <Tag className={ styles[type] }>{ children }</Tag>
  )
}

Button.propTypes = {
  tag: oneOf([ "button", "a" ]),
  type: oneOf([ "primary", "ghost" ]),
}

export default Button
