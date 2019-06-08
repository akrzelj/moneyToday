import React from "react";
import style from "./styles.module.css";
import Img from "gatsby-image";
import { Link } from "gatsby";

export default (
  { title, fluid, to, children } // TODO: refactor component
) => (
  <Link to={to}>
    <div className={style.main}>
      <div id={style.image}>
        <Img fluid={fluid} />
      </div>
      <div id={style.desc}>
        <span>{title}</span>
        <hr />
        <span id={style.textDesc}>{children}</span>
      </div>
    </div>
  </Link>
);
