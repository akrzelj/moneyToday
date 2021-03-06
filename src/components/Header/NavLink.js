import React from "react"
import { Link } from "gatsby"
import styles from "./styles.module.css"

export default ({ children, to }) => (
  <Link to={to} className={styles.navBarEl} activeClassName={styles.aktivan}>
    <div className={styles.navBarElContent}>{children}</div>
  </Link>
)
