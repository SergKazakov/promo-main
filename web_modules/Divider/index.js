import classnames from "classnames"
import styles from "./index.css"

const { oneOf } = React.PropTypes

const Divider = ({ theme="gray" }) => {
  const className = classnames({
    "dividerInnerGray": theme === "gray",
    "dividerInnerWhite": theme === "white",
  })

  return (
    <div className={ styles.divider }>
      <span className={ styles[className] } />
    </div>
  )
}

Divider.propTypes = {
  theme: oneOf([ "gray", "white" ]),
}

export default Divider
