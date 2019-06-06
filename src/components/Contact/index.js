import React from "react";
import style from "./styles.module.css";

export default () => (
  <div className={style.contact}>
    <div id={style.contactTitle}>
      <p>Contact us</p>
    </div>
    <input id={style.contactEmail} type="text" placeholder="Your e-mail" />
    <div id={style.contactMsg}>
      <p>Your message</p>
    </div>
    <div id={style.contactBtn}>Send Message</div>
  </div>
);
