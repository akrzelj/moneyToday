import React from "react"
import style from "./styles.module.css"

import { Link } from "gatsby"

class Contact extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  state = {
    password: "",
  }

  isContentValidEmail(content) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(content)
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })

    if (this.checkEmail(event)) {
      document.getElementById("submitButton").disabled = false
    } else {
      document.getElementById("submitButton").disabled = true
    }
  }

  checkEmail(event) {
    let currEmail =
      event.target.name === "email" ? event.target.value : this.state.email

    document.getElementById("emailFeedback").innerHTML = ""

    if (!this.isContentValidEmail(currEmail)) {
      document.getElementById("emailFeedback").innerHTML +=
        "Please enter valid e-mail address."
    } else {
      document.getElementById("emailFeedback").innerHTML = ""
      return true
    }

    return false
  }

  handleSubmit(event) {
    event.preventDefault()
    document.getElementById("submitButton").disabled = true
    document.getElementById("msgStatus").innerHTML = "Message successfully sent"
    setTimeout(function() {
      document.getElementById("name").value = ""
      document.getElementById("email").value = ""
      document.getElementById("message").value = ""
      document.getElementById("submitButton").value = "Send"
      document.getElementById("submitButton").disabled = false
      document.getElementById("msgStatus").innerHTML = ""
    }, 5000)
  }

  render() {
    return (
      <>
        <form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
          }}
        >
          <div className={style.form}>
            <div className={style.regoo}>
              <div className={style.title}>Contact us</div>

              <div className={style.name}>
                <input
                  className={style.registerInput}
                  id="name"
                  name="name"
                  placeholder="Enter your name here..."
                  type="text"
                  onInputCapture={this.handleUpdate}
                />
              </div>
              <div id="nameFeedback" className={style.feedback} />

              <div className={style.email}>
                <input
                  className={style.registerInput}
                  id="email"
                  name="email"
                  placeholder="Enter your e-mail here..."
                  type="text"
                  onInputCapture={this.handleUpdate}
                />
              </div>
              <div id="emailFeedback" className={style.feedback} />

              <div className={style.message}>
                <textarea
                  className={style.registerInput}
                  id="message"
                  name="message"
                  placeholder="Enter your message here..."
                  type="text"
                  onInputCapture={this.handleUpdate}
                />
              </div>
              <div id="messageFeedback" className={style.feedback} />

              <div className={style.buttonContainer}>
                <input
                  className={style.button}
                  type="submit"
                  value="Send"
                  id="submitButton"
                  disabled
                />
              </div>
              <div id="msgStatus" className={style.messageStatus} />
            </div>
          </div>
        </form>
      </>
    )
  }
}

export default Contact
