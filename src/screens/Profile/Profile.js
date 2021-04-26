import React from "react";
import "./styles.css";
import { Header } from "../../components";

const Profile = () => {
  return (
    <div>
      <Header />
      <div class="row">
        <div class="col-8">
          <img
            class="profilepic"
            src="https://www.bc.edu/content/bc-web/schools/mcas/departments/computer-science/people/faculty-directory/kim-nam-wook/_jcr_content/profileImage.img.png"
          />
        </div>
        <div class="col-8">
          <h3>Nam Wook Kim</h3>
          <h6>3 followers | 2 following</h6>
          <p>
            @namwookkim <br />
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
        <div class="col-8">
          <h3>News Article 1</h3>
          <h6>@username</h6>
          <div class="article">
            <img
              class="news-img"
              src="https://cdn.glitch.com/5962259e-83c4-4b6b-85ce-475cf88497a9%2Ffire-oilfield.png?v=1619403915597"
            />
          </div>
          <h3>News Article 2</h3>
          <h6>@username</h6>
          <div class="article">
            <img
              class="news-img"
              src="https://cdn.glitch.com/5962259e-83c4-4b6b-85ce-475cf88497a9%2Ffire-oilfield.png?v=1619403915597"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Profile };
