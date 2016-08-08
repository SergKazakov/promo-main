import Nav from "../Nav"
import Logo from "../Logo"
import styles from "./index.css"

const Header = () => (
  <header className={ styles.wrapper }>
    <div className={ styles.header }>
      <Logo />
      <Nav />
    </div>
  </header>
)

export default Header
