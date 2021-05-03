import React, { useState } from "react";
import "./styles.css";
import { Header } from "../../components";

const Events = ({ store }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const renderEvents = () => {
    return store.events.map(
      ({ id, userId, photo, desc, content, datetime }, i) => {
        if (desc.toLowerCase().includes(searchTerm.toLowerCase())) {
          return (
            <div class="article">
              <h3>{desc}</h3>
              <h5>May 3, 2021</h5>
              <h6>@{userId}</h6>
              <div class="flex-container">
                <img class="news-img" src={photo} />
                <p class="news-text">{content}</p>
              </div>
              <button type="button" class="btn btn-success">
                RSVP
              </button>
            </div>
          );
        }
      }
    );
  };

  return (
    <div>
      <Header store={store} setSearchTerm={(text) => setSearchTerm(text)} />
      <div className="events-container">{renderEvents()}</div>
    </div>
  );
};

export { Events };
