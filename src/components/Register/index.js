import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../../services/auth"
import style from "./styles.module.css"

class Register extends React.Component {
  state = {
    username: "",
    password: "",
  }

  isContentAlphanumeric(content) {
    return !/[^a-zA-Z0-9]/.test(content)
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })

    if (this.checkUsername(event) && this.checkPassword(event)) {
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
    console.log(currUsername)
    console.log("prije")
    console.log(currUsername.length)
    console.log(this.isContentAlphanumeric(currUsername))
    document.getElementById("usernameFeedback").innerHTML = ""
    if (currUsername.length <= 5) {
      document.getElementById("submitButton").disabled = true
      document.getElementById("usernameFeedback").innerHTML +=
        "Username has to be longer than 5 signs. "
      console.log("Username has to be longer than 5 signs. ")
    }
    if (!this.isContentAlphanumeric(currUsername)) {
      document.getElementById("submitButton").disabled = true
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
    console.log(currPassword)
    console.log("prije")
    console.log(currPassword.length)
    console.log(this.isContentAlphanumeric(currPassword))
    document.getElementById("passwordFeedback").innerHTML = ""
    if (currPassword.length <= 5) {
      document.getElementById("submitButton").disabled = true
      document.getElementById("passwordFeedback").innerHTML +=
        "Password has to be longer than 5 signs. "
      console.log("Password has to be longer than 5 signs. ")
    }
    if (!this.isContentAlphanumeric(currPassword)) {
      document.getElementById("submitButton").disabled = true
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

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
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

              <div className={style.username}>
                <input
                  className={style.registerInput}
                  id="username"
                  name="username"
                  placeholder="Enter your username here..."
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
                  placeholder="Enter your password here..."
                  type="text"
                  onInputCapture={this.handleUpdate}
                />
              </div>
              <div id="passwordFeedback" className={style.feedback} />
              <div className={style.buttonContainer}>
                <input
                  className={style.button}
                  type="submit"
                  value="Register"
                  id="submitButton"
                  disabled
                />
              </div>
              <div id="messageFeedback" className={style.feedback} />
            </div>
          </div>
        </form>
      </>
    )
  }
}

export default Register
