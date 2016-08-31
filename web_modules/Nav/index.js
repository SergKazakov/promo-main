import { Link } from "react-router"
import { Link as ScrollLink } from "react-scroll"
import Media from "react-responsive"
import styles from "./index.css"
import links from "./links.json"

const Nav = () => (
  <Media minWidth={ 1025 }>
    <nav className={ styles.wrapper }>
      <ul className={ styles.nav }>
        {
          links.map(({ title, url }, index) => {
            const props = {
              className: styles.navLink,
              to: url,
              ...index && {
                smooth: true,
                duration: 2000,
              },
            }

            if (!index) return (
              <li key={ index } className={ styles.navItem }>
                <Link
                  { ...props }
                  data-title={ title }
                >
                  { title }
                </Link>
              </li>
            )

            return (
              <li key={ index } className={ styles.navItem }>
                <ScrollLink
                  { ...props }
                  data-title={ title }
                >
                  { title }
                </ScrollLink>
              </li>
            )
          })
        }
      </ul>
    </nav>
  </Media>
)

export default Nav
