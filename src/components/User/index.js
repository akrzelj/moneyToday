import React from "react"

import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../../services/auth"

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
            logout(() => navigate(`/app/login`))
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
        <Link to="/app/login">Login</Link>
        <span>/</span>
        <Link to="/app/register">Register</Link>
      </>
    )
  }

  return <span>{content.display}</span>
}
