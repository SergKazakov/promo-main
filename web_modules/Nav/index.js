import styles from "./index.css"
import links from "./links.json"

const Nav = () => (
  <nav className={ styles.navWrapper }>
    <ul className={ styles.nav }>
      {
        links.map(({ title, url }, index) => {
          const props = {
            className: styles.navLink,
          }
          
          return (
            <li key={ index } className={ styles.navItem }>
              <a { ...props } data-title={ title } href={ url }>{ title }</a>
            </li>
          )
        })
      }
    </ul>
  </nav>
)

export default Nav
