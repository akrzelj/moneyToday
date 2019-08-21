import React from "react"
import { Link } from "gatsby"

import NavLink from "./NavLink"
import styles from "./styles.module.css"
import User from "../User"

export default () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.nav}>
        <Link to="/" id={styles.title}>
          Money Today
        </Link>
        <span id={styles.login}>
          <User />
        </span>
        <nav className={styles.navBar}>
          <span className={styles.navBarElContainer}>
            <NavLink to="/">News</NavLink>
            <NavLink to="/analysis/">Analysis</NavLink>
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
    </div>
  )
}
