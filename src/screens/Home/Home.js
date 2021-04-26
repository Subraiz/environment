import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Header } from "../../components";
import Store from "../../store.json";

const Home = () => {
  const renderPosts = () => {
    return Store.posts.map((post, i) => {
      const { photo, desc, shortContent, userId, id } = post;
      return (
        <Link key={i} to={`/post/${id}`} style={{ color: "black" }}>
          <div className={styles.post}>
            <img src={photo} alt="desc-tag" />
            <div className={styles.postInfo}>
              <h2>{desc}</h2>
              <p>{shortContent}</p>
            </div>
            <p className={styles.userId}>Created by {userId}</p>
          </div>
        </Link>
      );
    });
  };
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.postsContainer}>
          <div className={styles.newPostContainer}>
            <p>Start A New Post!</p>
            <button>Post</button>
          </div>
          <div className={styles.posts}>{renderPosts()}</div>
        </div>
        <div className={styles.booksContainer}></div>
      </div>
    </div>
  );
};

export { Home };
