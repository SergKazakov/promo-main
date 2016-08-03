import Button from "../../Button"
import { Input, Textarea } from "muicss/react"
import { notify } from "react-notify-toast"
import pkg from "../../../package.json"
import "whatwg-fetch"
import "./index.global.css"
import styles from "./index.css"

class ContactForm extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    fetch(pkg.contactUrl, {
      method: "POST",
      body: new FormData(this.contactForm),
    })
    .catch(() => {
      notify.show("We'll contact you as soon as possible.", "success")
    })
  }

  render() {
    return (
      <form
        ref={ c => this.contactForm = c }
        className={ styles.form }
        onSubmit={ this.handleSubmit }
      >
        <Input
          name="entry.896607324"
          label="Name"
          floatingLabel
          required
        />
        <Input
          name="entry.708584843"
          type="email"
          label="Email"
          floatingLabel
          required
        />
        <Input
          name="entry.2092706974"
          label="Subject"
          floatingLabel
          required
        />
        <Textarea
          name="entry.1358151322"
          rows={ 0 }
          label="Message"
          floatingLabel
          required
        />
        <Button>{ 'send message' }</Button>
      </form>
    )
  }
}

export default ContactForm
