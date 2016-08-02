import Divider from "../Divider"
import classnames from "classnames"
import styles from "./index.css"

const {
  oneOf,
  string,
} = React.PropTypes

const Title = ({ theme="gray", title, subtitle }) => {
  const titleClassName = classnames({
    "titleGray": theme === "gray",
    "titleWhite": theme === "white",
  })

  const subtitleClassName = classnames({
    "subtitleGray": theme === "gray",
    "subtitleWhite": theme === "white",
  })
  
  return (
    <div className={ styles.wrapper }>
      <h2 className={ styles[titleClassName] }>
        { title }
      </h2>
      <h3 className={ styles[subtitleClassName] }>
        { subtitle }
      </h3>
      <Divider theme={ theme } />
    </div>
  )
}

Title.propTypes = {
  theme: oneOf([ "white", "gray" ]),
  title: string.isRequired,
  subtitle: string.isRequired,
}

export default Title
