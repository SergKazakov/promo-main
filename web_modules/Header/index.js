import Nav from "../Nav"
import { Link } from "react-router"
import styles from "./index.css"

const Header = () => (
  <header className={ styles.wrapper }>
    <div className={ styles.header }>
      <Link className={ styles.logoWrapper } to={ "/" }>
        <img className={ styles.logo } src={ require("./logo.png") } />
      </Link>
      <Nav />
    </div>
  </header>
)

export default Header
