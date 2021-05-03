import React, { useState } from "react";
import "./styles.css";
import { Header } from "../../components";

const News = ({ store }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const renderNews = () => {
    return store.news.map(({ title, userId, photo, desc }, i) => {
      if (title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return (
          <div key={i}>
            <h3>{title}</h3>
            <h6>@{userId}</h6>
            <div class="article">
              <div class="flex-container">
                <img class="news-img" src={photo} />
                <p class="news-text">{desc}</p>
              </div>
            </div>
          </div>
        );
      }
    });
  };

  return (
    <div>
      <Header store={store} setSearchTerm={(text) => setSearchTerm(text)} />
      <div className="news-container">{renderNews()}</div>
    </div>
  );
};

export { News };
