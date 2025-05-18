import { ContactForm } from "../ContactForm"
import { Title } from "../Title"

import * as css from "./index.module.css"

const tel = "+ 02168091421"

const email = "contact@embermvp.com"

export const Contact = () => (
  <section className={css.wrapper} id="contact">
    <Title
      subtitle="Let’s start your success project together"
      title="kEEP IN TOUCH"
    />
    <div className={css.contact}>
      <div className={css.aside}>
        <h3 className={css.title}>OUR ADDRESS</h3>
        <p className={css.text}>Russia, Taganrog 347900</p>
        <h3 className={css.title}>CALL US</h3>
        <p className={css.text}>
          <a className={css.textLink} href={`tel:${tel}`}>
            {tel}
          </a>
        </p>
        <h3 className={css.title}>EMAIL US</h3>
        <p className={css.text}>
          <a className={css.textLink} href={`mailto:${email}`}>
            {email}
          </a>
        </p>
      </div>
      <ContactForm />
    </div>
  </section>
)
