import FormsyText from "formsy-material-ui/lib/FormsyText"
import Formsy from "formsy-react"
import RaisedButton from "material-ui/RaisedButton"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import { createFactory, Component } from "react";
import { ToastContainer, ToastMessage } from "react-toastr"

import "./index.global.css"
import * as css from "./index.module.css"

const ToastMessageFactory = createFactory(ToastMessage.animation)

export class ContactForm extends Component {
  constructor(props) {
    super(props)

    this.handleEnableButton = this.handleEnableButton.bind(this)
    this.handleDisableButton = this.handleDisableButton.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  state = { isSubmitted: false }

  handleEnableButton() {
    this.setState({ isSubmitted: true })
  }

  handleDisableButton() {
    this.setState({ isSubmitted: false })
  }

  handleSubmit(data) {
    const formData = new FormData()

    for (const key in data) {
      const value = data[key]

      formData.append(`entry.${key}`, value)
    }

    fetch(
      "https://docs.google.com/forms/d/1PMAvWDgx8buxlQyHPjP7dRwsCI7fnWbFGovquu9pzCs/formResponse",
      { method: "POST", body: formData },
    ).finally(() => {
      this.contactForm.reset()
      this.toast.success("We'll contact you as soon as possible.", "Success", {
        closeButton: true,
      })
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
      underlineStyle: { bottom: 0 },
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
      inputStyle: { margin: 0, height: "3.2rem", display: "block" },
      floatingLabelFocusStyle: { top: 0, transform: "scale(0.75)" },
    }

    const textareaProps = {
      ...commonProps,
      textareaStyle: { height: "100%", margin: 0, display: "block" },
      floatingLabelFocusStyle: { top: "-0.5rem", transform: "scale(0.75)" },
    }

    const buttonProps = {
      backgroundColor: "#e74c3c",
      style: { height: "auto", verticalAlign: "top", minWidth: 0 },
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
      <div className={css.wrapper}>
        <ToastContainer
          className="toast-top-right"
          ref={c => (this.toast = c)}
          toastMessageFactory={ToastMessageFactory}
        />
        <MuiThemeProvider>
          <Formsy.Form
            noValidate
            onInvalid={this.handleDisableButton}
            onValid={this.handleEnableButton}
            onValidSubmit={this.handleSubmit}
            ref={c => (this.contactForm = c)}
          >
            <FormsyText
              {...inputProps}
              floatingLabelText="Name"
              name="896607324"
            />
            <FormsyText
              {...inputProps}
              floatingLabelText="Email"
              name="708584843"
              type="email"
              validationError={emailError}
              validations="isEmail"
            />
            <FormsyText
              {...inputProps}
              floatingLabelText="Subject"
              name="2092706974"
            />
            <FormsyText
              {...textareaProps}
              floatingLabelText="Message"
              multiLine
              name="1358151322"
              rows={0}
            />
            <RaisedButton
              {...buttonProps}
              disabled={!this.state.isSubmitted}
              label="send message"
              type="submit"
            />
          </Formsy.Form>
        </MuiThemeProvider>
      </div>
    )
  }
}
