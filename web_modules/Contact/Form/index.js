import { ToastContainer, ToastMessage } from "react-toastr"

import Formsy from "formsy-react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import FormsyText from "formsy-material-ui/lib/FormsyText"
import RaisedButton from "material-ui/RaisedButton"

import pkg from "../../../package.json"
import css from "./index.css"

const ToastMessageFactory = React.createFactory(ToastMessage.animation)

class ContactForm extends React.Component {
  constructor(props) {
    super(props)

    this.enableButton  = this.enableButton.bind(this)
    this.disableButton = this.disableButton.bind(this)
    this.handleSubmit  = this.handleSubmit.bind(this)
  }

  state = {
    isSubmitted: false,
  }

  enableButton() {
    this.setState({
      isSubmitted: true,
    })
  }

  disableButton() {
    this.setState({
      isSubmitted: false,
    })
  }

  handleSubmit() {
    fetch(pkg.contactUrl, {
      method: "POST",
      body: new FormData(this.contactForm),
    })
    .finally(() => {
      this.contactForm.reset()
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
    const requiredError = "This field can't be blank"
    const emailError = "This field must be a valid email address"

    const commonProps = {
      style: {
        display: "block",
        width: "auto",
        height: "auto",
        fontFamily: "inherit",
        margin: "0 0 3rem",
        lineHeight: "initial",
      },
      underlineStyle: {
        bottom: 0,
      },
      floatingLabelStyle: {
        top: 0,
        fontWeight: "bold",
      },
      floatingLabelFocusStyle: {
        transform: "scale(0.75) translate(0px, -15px)",
      },
      errorStyle: {
        top: "calc(100% + 0.5rem)",
        bottom: "auto",
        left: 0,
        right: 0,
        fontSize: "1.2rem",
        position: "absolute",
      },
      autoComplete: "off",
      required: true,
    }

    const inputProps = {
      ...commonProps,
      inputStyle: {
        margin: 0,
        height: "3.2rem",
        display: "block",
      },
    }

    const textareaProps = {
      ...commonProps,
      textareaStyle: {
        height: "100%",
        margin: 0,
        display: "block",
      },
    }

    return (
      <div className={ css.wrapper }>
        <ToastContainer
          toastMessageFactory={ ToastMessageFactory }
          ref={ c => this.toast = c }
          className="toast-top-right"
        />
        <MuiThemeProvider>
          <Formsy.Form
            noValidate
            ref={ c => this.contactForm = c }
            onValid={ this.handleEnableButton }
            onInvalid={ this.handleDisableButton }
            onValidSubmit={ this.handleSubmit }
          >
            <FormsyText
              { ...inputProps }
              name="entry.896607324"
              floatingLabelText={ "Name" }
              validationError={ requiredError }
            />
            <FormsyText
              { ...inputProps }
              type="email"
              name="entry.708584843"
              validations="isEmail"
              floatingLabelText={ "Email" }
              validationError={ emailError }
            />
            <FormsyText
              { ...inputProps }
              name="entry.2092706974"
              floatingLabelText={ "Subject" }
              validationError={ requiredError }
            />
            <FormsyText
              { ...textareaProps }
              name="entry.1358151322"
              floatingLabelText={ "Message" }
              validationError={ requiredError }
              multiLine
              rows={ 0 }
            />
            <RaisedButton
              type="submit"
              label="send message"
              secondary
              disabled={ !this.state.isSubmitted }
            />
          </Formsy.Form>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default ContactForm
