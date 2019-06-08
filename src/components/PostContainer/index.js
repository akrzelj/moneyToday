import React from "react"
import style from "./styles.module.css"

export default ({ children }) => (
  <main className={style.postContainer}>{children}</main>
)
