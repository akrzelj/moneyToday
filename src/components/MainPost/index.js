import React from "react"
import style from "./styles.module.css"
import Img from "gatsby-image"

export default ({ title, fluid, to, children }) => (
  <div className={style.post}>
    <a href={to}>
      <div className={style.mainStory}>
        {/* <div className={style.img}> */}
        <Img className={style.img} fluid={fluid} />
        {/* </div> */}
        <div className={style.mainText}>
          <p className={style.title}>{title}</p>
          <hr />
          <p>{children}</p>
        </div>
      </div>
    </a>
  </div>
)
