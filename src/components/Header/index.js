import React from "react"
import { Link } from "gatsby"

import NavLink from "./NavLink"
import styles from "./styles.module.css"
import User from "../User"

import { setData } from "../../services/searchService"
import { navigate } from "@reach/router"

function handleSearch() {
  const searchData = document.getElementById("searchData").value

  setData(searchData)
  navigate("/search")
}

export default () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.nav}>
        <Link to="/" id={styles.title}>
          Money Today
        </Link>
        <span id={styles.login}>
          <User />
        </span>
        <nav className={styles.navBar}>
          <span className={styles.navBarElContainer}>
            <NavLink to="/">News</NavLink>
            <NavLink to="/analysis/">Analysis</NavLink>
            <NavLink to="/about/">About</NavLink>
            <NavLink to="/contact/">Contact</NavLink>
          </span>
          <div className={styles.navBarElSearch}>
            <input
              id="searchData"
              className={styles.navBarElInput}
              type="text"
              placeholder="Search..."
            />
            <button onClick={handleSearch} className={styles.navBarElButton}>
              Search
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}
