import React from "react";

import "./Chef.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <AnimatedOnScroll
      animationInDuration={1500}
      className="app__wrapper_img app__wrapper_img-reverse"
    >
      <img src={images.chef} alt="chef image" />
    </AnimatedOnScroll>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius velit
            nulla voluptatibus voluptatum sint tempore voluptates, eaque harum
          </p>
        </div>
        <p className="p__opensans">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio ea
          iusto repudiandae veritatis tempore illo consectetur culpa ipsa eum
          esse, architecto laboriosam odit illum ipsum totam aperiam porro vero
          impedit! Explicabo, sit eveniet adipisci recusandae facere voluptas
          voluptates. Consequatur voluptate nisi ut reprehenderit vitae,
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Lin</p>

        <p className="p__opensans">Chef & Founder</p>
        <AnimatedOnScroll animationIn="swing">
          <img src={images.sign} alt="kevin sign" />
        </AnimatedOnScroll>
      </div>
    </div>
  </div>
);

export default Chef;
