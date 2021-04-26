import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.header}>
        <h1>Environmental Racism</h1>
        <p>Join the fight.</p>
        <Link to="/questions">
          <button className={styles.learn}>Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export { Landing };
