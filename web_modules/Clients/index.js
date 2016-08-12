import Title from "../Title"
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
        clients.map((item, index) => (
          <li className={ styles.listItem } key={ index }>
            <img
              className={ styles.listImg }
              src={ require(`!!file!./${item}.svg`) }
            />
          </li>
        ))
      }
    </ul>
  </section>
)

export default Clients
