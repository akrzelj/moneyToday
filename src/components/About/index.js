import React from "react";
import style from "./styles.module.css";

export default () => (
  <div className={style.about}>
    <div id={style.aboutMain}>
      <div id={style.aboutMainTitle}>About</div>
      <div className={style.imgBig} />
      <div>Neki random tekst :D</div>
    </div>
    <div id={style.aboutSecond}>
      <div id={style.aboutSecondFirst}>
        <div id={style.aboutSecondTitle}>About</div>
        <div className={style.imgSmall} />
        <div>
          Neki random tekst :D
          <hr />
          <br />
        </div>
      </div>
      <div id={style.aboutSecondFirst}>
        <div id={style.aboutSecondTitle}>About</div>
        <div className={style.imgSmall} />
        <div>
          Neki random tekst :D
          <hr />
          <br />
        </div>
      </div>
      <div id={style.aboutSecondFirst}>
        <div id={style.aboutSecondTitle}>About</div>
        <div className={style.imgSmall} />
        <div>
          Neki random tekst :D
          <hr />
          <br />
        </div>
      </div>
    </div>
  </div>
);
