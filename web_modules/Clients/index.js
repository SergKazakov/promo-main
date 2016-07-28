import Title from "../Title"
import styles from "./index.css"

const Clients = () => (
  <section className={ styles.clientsWrapper }>
    <Title
      title={ 'Great Integrations with Others' }
      subtitle={ `Suspendisse sed eros mollis,
                  tincidunt felis eget, interdum erat.
                  Nullam sit amet odio eu est aliquet euismod a a urna.
                  Proin eu urna suscipit, dictum quam nec.` }
    />
  </section>
)

export default Clients
