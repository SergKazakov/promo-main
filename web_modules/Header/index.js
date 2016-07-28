import Nav from "../Nav"
import styles from "./index.css"

const Header = () => (
  <header className={ styles.headerWrapper }>
    <div className={ styles.header }>
      <Nav />
    </div>
  </header>
)

export default Header
