import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Header = ({ searchTerm, setSearchTerm, store, profile }) => {
  const user = store.users.filter((obj) => {
    return obj.id === store.currentUserId;
  })[0];

  console.log(user);
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
      {!profile ? (
        <div className={styles.searchContainer}>
          <input
            placeholder="Search for..."
            className={styles.searchBar}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      ) : null}

      <Link to="/profile" style={{ textDecoration: "none" }}>
        <div className={styles.profileContainer}>
          <p>Hi {user.name}</p>
          <div className={styles.avatarContainer}>
            <img src={user.photo} alt="pfp" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export { Header };
