import React from "react";
import "./styles.css";
import { Header } from "../../components";

const Events = () => {
  return (
    <div>
      <Header />

      <div class="article">
        <h3>Event 1</h3>
        <h5>May 3, 2021</h5>
        <h6>@username</h6>
        <div class="flex-container">
          <img
            class="news-img"
            src="https://cdn.glitch.com/5962259e-83c4-4b6b-85ce-475cf88497a9%2Ffire-oilfield.png?v=1619403915597"
          />
          <p class="news-text">
            Join the event! Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Aenean pellentesque volutpat erat et volutpat. Nullam non odio
            a tellus tempus ultrices. Vivamus sagittis malesuada turpis, ut
            maximus tortor aliquet a. Etiam consectetur dolor eu dolor
            fermentum, eu tincidunt tortor vulputate. Sed non massa lectus.
            Pellentesque nec massa eget ligula rhoncus condimentum quis quis
            nisl. Maecenas viverra dolor lacus, id ullamcorper orci facilisis
            vitae. Suspendisse condimentum sapien id justo congue vestibulum.
            Aenean scelerisque id orci tempor pellentesque. Curabitur non
            pulvinar nisi, et vulputate erat. Vivamus aliquam enim dolor, sit
            amet consequat lorem tempor vel. Nulla pulvinar leo a auctor
            consequat. Donec congue, ante a ultrices hendrerit, sem ligula
            pharetra sem, quis tincidunt nunc odio in est.
          </p>
        </div>
        <button type="button" class="btn btn-success">
          RSVP
        </button>
      </div>
      <br />
      <div class="article">
        <h3>Event 2</h3>
        <h5>May 18, 2021</h5>
        <h6>@username2</h6>
        <div class="flex-container">
          <img
            class="news-img"
            src="https://cdn.glitch.com/5962259e-83c4-4b6b-85ce-475cf88497a9%2Ffire-oilfield.png?v=1619403915597"
          />
          <p class="news-text">
            Join the event! Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Aenean pellentesque volutpat erat et volutpat. Nullam non odio
            a tellus tempus ultrices. Vivamus sagittis malesuada turpis, ut
            maximus tortor aliquet a. Etiam consectetur dolor eu dolor
            fermentum, eu tincidunt tortor vulputate. Sed non massa lectus.
            Pellentesque nec massa eget ligula rhoncus condimentum quis quis
            nisl. Maecenas viverra dolor lacus, id ullamcorper orci facilisis
            vitae. Suspendisse condimentum sapien id justo congue vestibulum.
            Aenean scelerisque id orci tempor pellentesque. Curabitur non
            pulvinar nisi, et vulputate erat. Vivamus aliquam enim dolor, sit
            amet consequat lorem tempor vel. Nulla pulvinar leo a auctor
            consequat. Donec congue, ante a ultrices hendrerit, sem ligula
            pharetra sem, quis tincidunt nunc odio in est.
          </p>
        </div>
        <button type="button" class="btn btn-success">
          RSVP
        </button>
      </div>
    </div>
  );
};

export { Events };
