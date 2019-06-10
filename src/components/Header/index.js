import React from "react"
import NavLink from "./NavLink"

import styles from "./styles.module.css"

import { getUser, isLoggedIn } from "../../services/auth"
import User from "../User"

export default () => {
  const content = { message: "", login: true }
  if (isLoggedIn()) {
    content.message = `Hello, ${getUser().name}`
  } else {
    content.message = "You are not logged in"
  }

  return (
    <div className={styles.nav}>
      <span id={styles.title}>Money Today</span>
      <span id={styles.login}>
        <User />
      </span>
      <nav className={styles.navBar}>
        <span className={styles.navBarElContainer}>
          <NavLink to="/">News</NavLink>
          <NavLink to="/analysis">Analysis</NavLink>
          {/* <NavLink to="/">Shop</NavLink> */}
          <NavLink to="/about/">About</NavLink>
          <NavLink to="/contact/">Contact</NavLink>
        </span>
        <input
          className={styles.navBarElSearch}
          type="text"
          placeholder="Search..."
        />
      </nav>
    </div>
  )
}
