import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef-img" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <p className="p__opensans">
          Adipisci reiciendis iste fugiat animi, porro placeat consequuntur ea
          ullam! Illum alias rerum maiores perferendis! Deleniti necessitatibus
          nobis, alias molestias doloribus libero!
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Foounder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
