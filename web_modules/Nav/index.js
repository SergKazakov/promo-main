import styles from "./index.css"
import links from "./links.json"

const Nav = () => (
  <nav className={ styles.navWrapper }>
    <ul className={ styles.nav }>
      {
        links.map(({ title, url }, index) => {
          return (
            <li key={ index } className={ styles.navItem }>
              <a className={ styles.navLink } href={ url }>{ title }</a>
            </li>
          )
        })
      }
    </ul>
  </nav>
)

export default Nav
