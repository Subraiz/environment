import React from "react";
import "./styles.css";
import { Header } from "../../components";

const Events = ({ store }) => {
  const renderEvents = () => {
    return store.events.map(
      ({ id, userId, photo, desc, content, datetime }, i) => {
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
    );
  };

  return (
    <div>
      <Header store={store} />
      <div className="events-container">{renderEvents()}</div>
    </div>
  );
};

export { Events };
