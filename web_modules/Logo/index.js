import { Link } from "react-router"
import styles from "./index.css"

const Logo = () => (
  <Link className={ styles.rapper } to={ "/" }>
    <img className={ styles.logo } src={ require("!!file!./logo.png") } />
  </Link>
)

export default Logo
