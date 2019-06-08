import React from "react"
import style from "./layout.module.css"
import Footer from "./../Footer"
import Header from "./../Header"

export default ({ children }) => {
  return (
    <div className={style.main}>
      <div className={style.headAndChild}>
        <Header />

        {children}
      </div>
      <Footer />
    </div>
  )
}
