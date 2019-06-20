import React from "react"
import style from "./styles.module.css"
import Footer from "./../Footer"
import Header from "./../Header"

export default ({ children }) => {
  return (
    <div className={style.main}>
      <div className={style.headAndChild}>
        <Header />
        <div className={style.wrapper}>{children}</div>
      </div>
      <Footer />
    </div>
  )
}
