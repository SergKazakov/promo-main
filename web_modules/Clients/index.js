import Title from "../Title"
import { Link } from "react-router"
import Svg from "react-svg-inline"
import styles from "./index.css"
import clients from "./clients.json"

const Clients = () => (
  <section className={ styles.wrapper }>
    <Title
      title={ 'Great Integrations with Others' }
      subtitle={ `Suspendisse sed eros mollis,
                  tincidunt felis eget, interdum erat.
                  Nullam sit amet odio eu est aliquet euismod a a urna.
                  Proin eu urna suscipit, dictum quam nec.` }
    />
    <ul className={ styles.list }>
      {
        clients.map(({ name, url }, index) => (
          <li className={ styles.listItem } key={ index }>
            <Link className={ styles.listLink } to={ url }>
              <Svg
                svg={ require(`./${name}.svg`) }
                width="15rem"
                height="auto"
              />
            </Link>
          </li>
        ))
      }
    </ul>
  </section>
)

export default Clients
