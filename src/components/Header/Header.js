import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.navContainer}>
        <Link to="/home">
          <img
            className={styles.logo}
            src="https://cdn.glitch.com/5962259e-83c4-4b6b-85ce-475cf88497a9%2Fenvironmental-justice-logo.png?v=1619402865920"
            alt="logo"
          />
        </Link>
        <Link to="/news" className={styles.navItem}>
          <p>News</p>
        </Link>
        <Link to="/events" className={styles.navItem}>
          <p>Events</p>
        </Link>
      </div>
      <div className={styles.searchContainer}>
        <input placeholder="Search for..." className={styles.searchBar} />
      </div>
      <Link to="/profile" style={{ textDecoration: "none" }}>
        <div className={styles.profileContainer}>
          <p>Hi Nam!</p>
          <div className={styles.avatarContainer}>
            <img
              src="https://www.bc.edu/content/bc-web/schools/mcas/departments/computer-science/people/faculty-directory/kim-nam-wook/_jcr_content/profileImage.img.png"
              alt="pfp"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export { Header };
