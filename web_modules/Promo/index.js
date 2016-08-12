import { Link as ScrollLink } from "react-scroll"
import styles from "./index.css"

const Promo = () => (
  <section className={  styles.wrapper }>
    <div className={ styles.inner }>
      <h3 className={ styles.title }>
        { "Let's Get Started Now" }
      </h3>
      <h4 className={ styles.subtitle }>
        {
          `Look at the distance, this is the road on which your project go
          through , it is not easy, so let's go through it together`
        }
      </h4>
      <ScrollLink
        className={ styles.btn }
        to={ 'contact' }
        smooth
        duration={ 2000 }
      >
        { 'Start' }
      </ScrollLink>
    </div>
  </section>
)

export default Promo
