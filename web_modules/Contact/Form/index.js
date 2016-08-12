import Button from "../../Button"
import { Input, Textarea } from "muicss/react"
import { ToastContainer, ToastMessage } from "react-toastr"
import pkg from "../../../package.json"
import "./index.global.css"
import css from "./index.css"

const ToastMessageFactory = React.createFactory(ToastMessage.animation)

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
    .catch(error => console.log(error))
    .finally(() => {
      this.toast.success(
        "We'll contact you as soon as possible.",
        "Success",
        {
          closeButton: true,
        }
      )
    })
  }

  render() {
    return (
      <div className={ css.wrapper }>
        <ToastContainer
          toastMessageFactory={ ToastMessageFactory }
          ref={ c => this.toast = c }
          className="toast-top-right"
        />
        <form
          ref={ c => this.contactForm = c }
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
      </div>
    )
  }
}

export default ContactForm
