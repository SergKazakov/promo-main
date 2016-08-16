import { ToastContainer, ToastMessage } from "react-toastr"

import Formsy from "formsy-react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import FormsyText from "formsy-material-ui/lib/FormsyText"
import RaisedButton from "material-ui/RaisedButton"

import pkg from "../../../package.json"
import "./index.global.css"
import css from "./index.css"

const ToastMessageFactory = React.createFactory(ToastMessage.animation)

class ContactForm extends React.Component {
  constructor(props) {
    super(props)

    this.handleEnableButton = this.handleEnableButton.bind(this)
    this.handleDisableButton = this.handleDisableButton.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  state = {
    isSubmitted: false,
  }

  handleEnableButton() {
    this.setState({
      isSubmitted: true,
    })
  }

  handleDisableButton() {
    this.setState({
      isSubmitted: false,
    })
  }

  handleSubmit(data, resetForm) {
    const formData = new FormData()

    for (const key in data) {
      const value = data[key]

      formData.append(`entry.${key}`, value)
    }

    fetch(pkg.contactUrl, {
      method: "POST",
      body: formData,
    })
    .finally(() => {
      resetForm()
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
    const emailError = "This field must be a valid email address"

    const commonProps = {
      style: {
        display: "block",
        width: "auto",
        height: "auto",
        fontFamily: "inherit",
        padding: "1.5rem 0 0",
        margin: "0 0 3rem",
        lineHeight: "initial",
        fontSize: "1.4rem",
      },
      underlineStyle: {
        bottom: 0,
      },
      floatingLabelStyle: {
        top: "1.5rem",
        left: 0,
        right: 0,
        fontWeight: "bold",
        color: "#999",
        lineHeight: "3.2rem",
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
      floatingLabelFocusStyle: {
        top: 0,
        transform: "scale(0.75)",
      },
    }

    const textareaProps = {
      ...commonProps,
      textareaStyle: {
        height: "100%",
        margin: 0,
        display: "block",
      },
      floatingLabelFocusStyle: {
        top: "-0.5rem",
        transform: "scale(0.75)",
      },
    }

    const buttonProps = {
      backgroundColor: "#e74c3c",
      style : {
        height: "auto",
        verticalAlign: "top",
        minWidth: 0,
      },
      labelStyle: {
        fontFamily: "Open Sans",
        fontWeight: "bold",
        fontSize: "1.4rem",
        padding: "1.75rem 4rem",
        display: "block",
        borderRadius: "0.5rem",
        color: "#fff",
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
            onValid={ this.handleEnableButton }
            onInvalid={ this.handleDisableButton }
            onValidSubmit={ this.handleSubmit }
          >
            <FormsyText
              { ...inputProps }
              name="896607324"
              floatingLabelText={ "Name" }
            />
            <FormsyText
              { ...inputProps }
              type="email"
              name="708584843"
              validations="isEmail"
              floatingLabelText={ "Email" }
              validationError={ emailError }
            />
            <FormsyText
              { ...inputProps }
              name="2092706974"
              floatingLabelText={ "Subject" }
            />
            <FormsyText
              { ...textareaProps }
              name="1358151322"
              floatingLabelText={ "Message" }
              multiLine
              rows={ 0 }
            />
            <RaisedButton
              { ...buttonProps }
              type="submit"
              label="send message"
              disabled={ !this.state.isSubmitted }
            />
          </Formsy.Form>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default ContactForm
