import React from "react"
import style from "./styles.module.css"
import { Link } from "gatsby"
import { setLastPage } from "./../../services/helper"

function clickMethod() {
  setLastPage(window.location.pathname)
}

export default ({ children }) => (
  <>
    <div className={style.container}>
      <Link onClick={clickMethod} to="/app/login">
        Log in
      </Link>
      &nbsp; or
      <Link onClick={clickMethod} to="/app/register">
        &nbsp; register &nbsp;
      </Link>
      to see restricted content
    </div>
  </>
)
