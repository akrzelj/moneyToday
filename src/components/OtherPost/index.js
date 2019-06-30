import React from "react"
import style from "./styles.module.css"
import Img from "gatsby-image"

export default ({ title, fluid, to, children }) => (
  <a href={to}>
    <div className={style.main}>
      <Img fluid={fluid} />
      <div id={style.desc}>
        <span>{title}</span>
        <hr />
        <span id={style.desc}>{children}</span>
      </div>
    </div>
  </a>
)
