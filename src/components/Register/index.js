import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../../services/auth"
import style from "./styles.module.css"

class Register extends React.Component {
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
            navigate(`/analysis`)
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
                  onChange={this.handleUpdate}
                />
              </div>

              <div className={style.password}>
                <input
                  className={style.registerInput}
                  id="password"
                  name="password"
                  placeholder="Enter your password here..."
                  type="text"
                  onChange={this.handleUpdate}
                />
              </div>
              <div className={style.buttonContainer}>
                <input
                  className={style.button}
                  type="submit"
                  value="Register"
                />
              </div>
            </div>
          </div>
        </form>
      </>
    )
  }
}

export default Register
