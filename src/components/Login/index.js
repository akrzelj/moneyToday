import React from "react"
import { Link, navigate } from "gatsby"
import style from "./styles.module.css"
import { handleLogin, isLoggedIn } from "../../services/auth"

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    document.getElementById("passwordFeedback").innerHTML = ""
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    return handleLogin(this.state)
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
            if (this.handleSubmit(event) == false) {
              if (
                this.state.username.length != 0 &&
                this.state.password.length != 0
              ) {
                document.getElementById("passwordFeedback").innerHTML =
                  "Entered credentials are not valid!!!"
                document.getElementById("usernameFeedback").innerHTML = ""
              } else {
                if (this.state.username.length == 0) {
                  document.getElementById("usernameFeedback").innerHTML =
                    "Please enter username"
                }

                if (this.state.password.length == 0) {
                  document.getElementById("passwordFeedback").innerHTML =
                    "Please enter password"
                }
              }
            } else {
              navigate(`/`)
            }
          }}
        >
          <div className={style.form}>
            <div className={style.regoo}>
              <div className={style.title}>Login</div>

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
                  type="password"
                  onInputCapture={this.handleUpdate}
                />
              </div>
              <div id="passwordFeedback" className={style.feedback} />

              <div className={style.buttonContainer}>
                <input
                  className={style.button}
                  type="submit"
                  value="Login"
                  id="submitButton"
                />
              </div>
              <div className={style.redirectToLogin}>
                Don't have an account? Then&nbsp;
                <Link to="/app/register"> Register </Link>
              </div>
            </div>
          </div>
        </form>
      </>
    )
  }
}

export default Login
