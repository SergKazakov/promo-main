import Title from "../Title"
import Button from "../Button"
import { Input, Textarea } from "muicss/react"
import styles from "./index.css"

const Contact = () => (
  <section className={ styles.contactWrapper }>
    <Title
      title={ 'kEEP IN TOUCH' }
      subtitle={ `Nullam sit amet odio eu est aliquet euismod a a urna.
                  Proin eu urna suscipit, dictum quam nec.` }
    />
    <div className={ styles.contact }>
      <div className={ styles.aside }>
        <h3 className={ styles.title }>
          { 'OUR ADDRESS' }
        </h3>
        <p className={ styles.text }>
          { 'House #13, Streat road, Sydney 2310 Australia' }
        </p>
        <h3 className={ styles.title }>
          { 'CALL US' }
        </h3>
        <p className={ styles.text }>
          <a className={ styles.textLink } href={ 'tel:+ 880 168 109 1425' }>
            { '+ 880 168 109 1425' }
          </a>
        </p>
        <p className={ styles.text }>
          <a className={ styles.textLink } href={ 'tel:+ 0216809142' }>
            { '+ 0216809142' }
          </a>
        </p>
        <h3 className={ styles.title }>
          { 'EMAIL US' }
        </h3>
        <p className={ styles.text }>
          <a className={ styles.textLink } href={ 'mailto:contact@email.com' }>
            { 'contact@email.com' }
          </a>
        </p>
      </div>
      <form className={ styles.form }>
        <Input label="Name" floatingLabel required />
        <Input type="email" label="Email" floatingLabel required />
        <Input label="Subject" floatingLabel required />
        <Textarea rows="0" label="Message" floatingLabel required />
        <Button>{ 'send message' }</Button>
      </form>
    </div>
  </section>
)

export default Contact
