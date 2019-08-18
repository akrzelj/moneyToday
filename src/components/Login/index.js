import React from "react"
import { navigate } from "gatsby"
import style from "./styles.module.css"
import { handleLogin, isLoggedIn } from "../../services/auth"

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
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
      navigate(`/analysis`)
    }

    return (
      <>
        <form
          method="post"
          onSubmit={event => {
            let loginSuccess = this.handleSubmit(event)
            if (loginSuccess === false) {
              alert("Credentials not valid!!!")
            } else {
              navigate(`/analysis`)
            }
          }}
        >
          <div className={style.form}>
            <div className={style.logoo}>
              <div className={style.title}>Login</div>

              <div className={style.username}>
                <input
                  className={style.loginInput}
                  id="username"
                  name="username"
                  placeholder="Enter your username here..."
                  type="text"
                  onChange={this.handleUpdate}
                />
              </div>

              <div className={style.password}>
                <input
                  className={style.loginInput}
                  id="password"
                  name="password"
                  placeholder="Enter your password here..."
                  type="text"
                  onChange={this.handleUpdate}
                />
              </div>
              <div className={style.buttonContainer}>
                <input className={style.button} type="submit" value="Login" />
              </div>
            </div>
          </div>
        </form>
      </>
    )
  }
}

export default Login
