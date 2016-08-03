import Title from "../Title"
import { Link } from "react-router"
import styles from "./index.css"
import nav from "./nav.json"
import works from "./works.json"

const Works = () => (
  <section id="portfolio" className={ styles.wrapper }>
    <Title
      title={ 'RECENT WORKS' }
      subtitle={
        `It has survived not only five centuries,
        but also the leap scrambled it to make a type.`
      }
    />
    <ul className={ styles.nav }>
      {
        nav.map(({ title }, index) => (
          <li key={ index } className={ styles.navItem }>
            <a href="#" data-title={ title } className={ styles.navLink }>
              { title }
            </a>
          </li>
        ))
      }
    </ul>
    <ul className={ styles.list }>
      {
        works.map(({ title, category, url }, index) => {
          const src = require(`./${++index}.jpg`)

          const props = {
            className: styles.listItem,
            style: {
              backgroundImage: `url(${src})`,
            },
          }

          return (
            <li key={ index } { ...props }>
              <Link to={ url } className={ styles.overlay }>
                <h3 className={ styles.title }>{ title }</h3>
                <span className={ styles.category }>{ category }</span>
              </Link>
            </li>
          )
        })
      }
    </ul>
  </section>
)

export default Works
