import React from "react";
import styles from "./styles.module.css";
import { Header } from "../../components";
import Store from "../../store.json";

const Home = () => {
  console.log(Store);
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.postsContainer}>
          <div className={styles.newPostContainer}>
            <p>Start A New Post!</p>
            <button>Post</button>
          </div>
        </div>
        <div className={styles.booksContainer}></div>
      </div>
    </div>
  );
};

export { Home };
