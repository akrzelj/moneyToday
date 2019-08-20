import React from "react"
import style from "./styles.module.css"
import { Link } from "gatsby"

export default ({ children }) => (
  <>
    <br />
    <br />
    <br />
    <div className={style.container}>
      <Link to="/app/login">Log in </Link>&nbsp; or
      <Link to="/app/register">&nbsp; register &nbsp; </Link>
      to see restricted content
    </div>
  </>
)
