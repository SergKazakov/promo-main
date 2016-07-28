import styles from "./index.css"

const links = [
  {
    title: "home",
    url: "/",
  },
  {
    title: "about us",
    url: "/",
  },
  {
    title: "portfolio",
    url: "/",
  },
  {
    title: "pricing",
    url: "/",
  },
  {
    title: "team",
    url: "/",
  },
  {
    title: "blog",
    url: "/",
  },
  {
    title: "contact",
    url: "/",
  },
]

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
