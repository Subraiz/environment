import React from "react";
import "./styles.css";
import { Header } from "../../components";

const Profile = ({ store }) => {
  const user = store.users.filter((obj) => {
    return obj.id === store.currentUserId;
  })[0];

  const followers = store.followers.filter((obj) => {
    return obj.userId === user.id;
  }).length;

  const following = store.followers.filter((obj) => {
    return obj.followerId === user.id;
  }).length;

  const news = store.news.filter((obj) => {
    return obj.userId === user.id;
  });

  const renderNews = () => {
    return news.map(({ title, userId, photo }, i) => {
      return (
        <div key={i}>
          <h3>{title}</h3>
          <h6>@{userId}</h6>
          <div class="article">
            <img class="news-img" src={photo} />
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <Header store={store} profile={true} />
      <div class="row">
        <div class="col-8">
          <img class="profilepic" src={user.photo} />
        </div>
        <div class="col-8">
          <h3>{user.name}</h3>
          <h6>
            {followers} followers | {following} following
          </h6>
          <p>
            @{user.id} <br />
            Chestnut Hill, MA
            <br />
            <br />
            <em>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              pellentesque volutpat erat et volutpat. Nullam non odio a tellus
              tempus ultrices. Vivamus sagittis malesuada turpis, ut maximus
              tortor aliquet a. Etiam consectetur dolor eu dolor fermentum, eu
              tincidunt tortor vulputate. Sed non massa lectus.
            </em>
          </p>
        </div>
        <div class="col-8">{renderNews()}</div>
      </div>
    </div>
  );
};

export { Profile };
