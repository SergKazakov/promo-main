import Nav from "../Nav"
import { Link } from "react-router"
import styles from "./index.css"

const Header = () => (
  <header className={ styles.headerWrapper }>
    <div className={ styles.header }>
      <Link to="/">
        <img className={ styles.logo } src={ require("./logo.png") } />
      </Link>
      <Nav />
    </div>
  </header>
)

export default Header
