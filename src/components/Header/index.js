import React from "react";
import NavLink from "./NavLink";

import styles from "./styles.module.css";
import { Link } from "gatsby";

export default () => (
  <div className={styles.nav}>
    <span id={styles.title}>Money Today</span>
    <span id={styles.login}>
      <Link to="/login">Login</Link> ---- <Link to="/register">Register</Link>{" "}
    </span>
    <nav className={styles.navBar}>
      <span className={styles.navBarElContainer}>
        <NavLink to="/">News</NavLink>
        <NavLink to="/analysis">Analysis</NavLink>
        {/* <NavLink to="/">Shop</NavLink> */}
        <NavLink to="/about/">About</NavLink>
        <NavLink to="/contact/">Contact</NavLink>
      </span>
      <input
        className={styles.navBarElSearch}
        type="text"
        placeholder="Search..."
      />
    </nav>
  </div>
);
