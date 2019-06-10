import React, { Component } from "react"
import style from "./styles.module.css"

class Contact extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={style.contact}>
          <div className={style.contactTitle}>Contact us...</div>

          <div className={style.contactName}>
            <input
              id="name"
              name="name"
              placeholder="Enter your name here..."
              type="text"
            />
          </div>

          <div className={style.contactEmail}>
            <input
              id="email"
              name="email"
              placeholder="Enter your email here..."
              type="email"
            />
          </div>
          <div className={style.constactMsg}>
            <input
              id="msg"
              name="msg"
              className={style.msg}
              placeholder="Enter you message..."
              type="text"
            />
          </div>
          <div className={style.contactBtn}>
            <button>Click to send your msg</button>
          </div>
        </div>
      </form>
    )
  }
}

export default Contact
