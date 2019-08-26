import React from "react"
import { Link, navigate } from "gatsby"
import {
  loginWithoutCheckingCredentials,
  isLoggedIn,
} from "../../services/auth"
import style from "./styles.module.css"

class Register extends React.Component {
  state = {
    username: "",
    name: "Mister X",
    password: "",
    email: "",
  }

  isContentAlphanumeric(content) {
    return !/[^a-zA-Z0-9]/.test(content)
  }

  isContentValidEmail(content) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(content)
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })

    if (
      this.checkUsername(event) &&
      this.checkPassword(event) &&
      this.checkEmail(event)
    ) {
      document.getElementById("submitButton").disabled = false
    } else {
      document.getElementById("submitButton").disabled = true
    }
  }

  checkUsername(event) {
    let currUsername =
      event.target.name === "username"
        ? event.target.value
        : this.state.username
    document.getElementById("usernameFeedback").innerHTML = ""
    if (currUsername.length <= 5) {
      document.getElementById("usernameFeedback").innerHTML +=
        "Username has to be longer than 5 signs. "
      console.log("Username has to be longer than 5 signs. ")
    }
    if (!this.isContentAlphanumeric(currUsername)) {
      document.getElementById("usernameFeedback").innerHTML +=
        "Username can only contain alphanumeric signs. "
      console.log("Username can only contain alphanumeric signs.")
    }
    if (currUsername.length > 5 && this.isContentAlphanumeric(currUsername)) {
      document.getElementById("usernameFeedback").innerHTML = ""
      return true
    }

    return false
  }

  checkPassword(event) {
    let currPassword =
      event.target.name === "password"
        ? event.target.value
        : this.state.password
    document.getElementById("passwordFeedback").innerHTML = ""
    if (currPassword.length <= 5) {
      document.getElementById("passwordFeedback").innerHTML +=
        "Password has to be longer than 5 signs. "
      console.log("Password has to be longer than 5 signs. ")
    }
    if (!this.isContentAlphanumeric(currPassword)) {
      document.getElementById("passwordFeedback").innerHTML +=
        "Password can only contain alphanumeric signs. "
      console.log("Password can only contain alphanumeric signs.")
    }
    if (currPassword.length > 5 && this.isContentAlphanumeric(currPassword)) {
      document.getElementById("passwordFeedback").innerHTML = ""
      return true
    }

    return false
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

  handleSubmit = event => {
    event.preventDefault()
    return loginWithoutCheckingCredentials(this.state)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/app/profile`)
    }

    return (
      <>
        <form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
            navigate(`/`)
          }}
        >
          <div className={style.form}>
            <div className={style.regoo}>
              <div className={style.title}>Register</div>

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

              <div className={style.username}>
                <input
                  className={style.registerInput}
                  id="username"
                  name="username"
                  placeholder="Enter new username here..."
                  type="text"
                  onInputCapture={this.handleUpdate}
                />
              </div>
              <div id="usernameFeedback" className={style.feedback} />

              <div className={style.password}>
                <input
                  className={style.registerInput}
                  id="password"
                  name="password"
                  placeholder="Enter new password here..."
                  type="text"
                  onInputCapture={this.handleUpdate}
                />
              </div>
              <div id="passwordFeedback" className={style.feedback} />

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

              <div className={style.buttonContainer}>
                <input
                  className={style.button}
                  type="submit"
                  value="Register"
                  id="submitButton"
                  disabled
                />
              </div>
              <div className={style.redirectToLogin}>
                Allready have an account? Then&nbsp;
                <Link to="/app/login"> Login </Link>
              </div>
            </div>
          </div>
        </form>
      </>
    )
  }
}

export default Register
