import React from "react"
import style from "./styles.module.css"

export default () => (
  <div className={style.about}>
    <div id={style.aboutMain}>
      <div id={style.aboutMainTitle}>Success</div>
      <img
        className={style.imgBig}
        alt="Success"
        src="https://www.industryweek.com/sites/industryweek.com/files/styles/article_featured_retina/public/uploads/2017/05/teamwork.jpg?itok=U5ZihnwP"
      />
      <div>
        Agile development seed moly adopters social media MVP stealth
        accelerator prototype. Holy grail crowdfunding analytics seed money
        marketing buzz stock low hanging fruit social media partnership. Success
        sales iteration series A financing. Release A
      </div>
    </div>
    <div id={style.aboutSecond}>
      <div id={style.aboutSecondFirst}>
        <div id={style.aboutSecondTitle}>Team</div>
        <hr />
        <img
          className={style.imgSmall}
          alt="Team"
          src="https://d24fkeqntp1r7r.cloudfront.net/wp-content/uploads/2019/04/15230034/grant-ritchie-530779-unsplash.jpg"
        />
        <div>
          Agile development seed money vesting period social media. Freemium
          crowdsource success. Pivot ip. Success sales iteration series A
          financing. Release A
        </div>

        <br />
      </div>
      <div id={style.aboutSecondFirst}>
        <div id={style.aboutSecondTitle}>Prosperity</div>
        <hr />
        <img
          className={style.imgSmall}
          alt="Prosperity"
          src="http://mediad.publicbroadcasting.net/p/kvcr/files/styles/x_large/public/201802/welcome-prosperity.jpg"
        />
        <div>
          Agile development seed money vesting period social media. Freemium
          crowdsource success. Pivot A/B testing hackathon facebook
          non-disclosure agreemeser expers iteration series A financing. Release
          A
        </div>

        <br />
      </div>
      <div id={style.aboutSecondFirst}>
        <div id={style.aboutSecondTitle}>Comunity</div>
        <hr />
        <img
          className={style.imgSmall}
          alt="Comunity"
          src="https://static01.nyt.com/images/2018/05/08/well/physed-happiness/physed-happiness-jumbo.jpg?quality=90&auto=webp"
        />
        <div>
          Agile development seed money vesting period social media. Freemium
          crowdsource success. Pivot A/B testing hackathon facebook
          non-disclosure agreemeser expers iteration series A financing. Release
          A
        </div>

        <br />
      </div>
    </div>
  </div>
)
