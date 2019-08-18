import React from "react"
import style from "./styles.module.css"
import { getUser } from "../../services/auth"

const Profile = () => (
  <>
    <div className={style.container}>
      <div className={style.title}>Hallo dear {getUser().name}</div>

      <div className={style.info}>Profile data:</div>

      <div className={style.username}>Username: {getUser().username}</div>

      <div className={style.email}>Email: {getUser().email}</div>
    </div>
  </>
)

export default Profile
