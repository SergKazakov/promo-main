import Title from "../Title"
import styles from "./index.css"

const Contact = () => (
  <section className={ styles.contactWrapper }>
    <Title
      title={ 'kEEP IN TOUCH' }
      subtitle={ `Nullam sit amet odio eu est aliquet euismod a a urna.
                  Proin eu urna suscipit, dictum quam nec.` }
    />
  </section>
)

export default Contact
