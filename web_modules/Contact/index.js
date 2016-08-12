import Title from "../Title"
import ContactForm from "./Form"
import css from "./index.css"

const tel = "+ 02168091421"
const email = "contact@embermvp.com"

const Contact = () => (
  <section id="contact" className={ css.wrapper }>
    <Title
      title={ 'kEEP IN TOUCH' }
      subtitle={ "Let’s start your success project together" }
    />
    <div className={ css.contact }>
      <div className={ css.aside }>
        <h3 className={ css.title }>
          { 'OUR ADDRESS' }
        </h3>
        <p className={ css.text }>
          { 'Russia, Taganrog 347900' }
        </p>
        <h3 className={ css.title }>
          { 'CALL US' }
        </h3>
        <p className={ css.text }>
          <a className={ css.textLink } href={ `tel:${tel}` }>
            { tel }
          </a>
        </p>
        <h3 className={ css.title }>
          { 'EMAIL US' }
        </h3>
        <p className={ css.text }>
          <a className={ css.textLink } href={ `mailto:${email}` }>
            { email }
          </a>
        </p>
      </div>
      <ContactForm />
    </div>
  </section>
)

export default Contact
