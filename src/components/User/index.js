import React from "react"

import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../../services/auth"

export default () => {
  const content = { message: "", login: true }
  console.log(isLoggedIn())
  if (isLoggedIn()) {
    content.message = `Hello, ${getUser().name}`
    content.display = (
      <>
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
      </>
    )
  } else {
    content.message = ""
    content.display = (
      <>
        {content.message}
        <Link to="/app/login">Login</Link>
        <span>, or: </span>
        <Link to="/app/register">Register</Link>
      </>
    )
  }

  return <span>{content.display}</span>
}
