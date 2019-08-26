import React from "react"

import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../../services/auth"

import styles from "./styles.module.css"
import { setLastPage } from "../../services/helper"

function clickMethod() {
  setLastPage(window.location.pathname)
}

export default () => {
  const content = { message: "", login: true }
  if (isLoggedIn()) {
    content.message = `${getUser().name}`
    content.display = (
      <Link to="app/profile">
        {content.message}
        <a
          href="/"
          onClick={event => {
            event.preventDefault()
            logout(() => navigate(`/`))
          }}
        >
          (Logout)
        </a>
      </Link>
    )
  } else {
    content.message = ""
    content.display = (
      <>
        {content.message}
        <Link onClick={clickMethod} to="/app/login">
          Login
        </Link>
        <span className={styles.hideOnMobile}>{" / "}</span>
        <Link
          onClick={clickMethod}
          className={styles.hideOnMobile}
          to="/app/register"
        >
          Register
        </Link>
      </>
    )
  }

  return <span>{content.display}</span>
}
