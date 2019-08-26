import React from "react"
import { Link } from "gatsby"
import styles from "./styles.module.css"

export default () => (
  <footer>
    <Link to="/">
      <span className={styles.text}>Money Today</span>
    </Link>
  </footer>
)
