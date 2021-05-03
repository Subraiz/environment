import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Header } from "../../components";

const Home = ({ store }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const renderPosts = () => {
    return store.posts
      .sort((a, b) => new Date(b.datetime) - new Date(a.datetime))
      .map((post, i) => {
        const { photo, desc, shortContent, userId, id } = post;
        if (desc.toLowerCase().includes(searchTerm.toLowerCase())) {
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
        }
      });
  };

  return (
    <div>
      <Header
        store={store}
        searchTerm={searchTerm}
        setSearchTerm={(text) => setSearchTerm(text)}
      />
      <div className={styles.container}>
        <div className={styles.postsContainer}>
          <div className={styles.newPostContainer}>
            <p>Start A New Post!</p>
            <Link to="/create">
              <button>Post</button>
            </Link>
          </div>
          <div className={styles.posts}>{renderPosts()}</div>
        </div>
        <div className={styles.booksContainer}></div>
      </div>
    </div>
  );
};

export { Home };
