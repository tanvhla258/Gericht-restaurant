import React from "react";

import "./Laurels.css";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
const AwardCard = ({ award: { imgUrl, title, subtitle }, index }) => (
  <AnimatedOnScroll
    animationInDelay={index * 500}
    className="app__laurels_awards-card"
  >
    <img src={imgUrl} alt="award" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </AnimatedOnScroll>
);
const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards and recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurels_awards">
        {data.awards.map((award, index) => (
          <AwardCard index={index} award={award} key={award.title} />
        ))}
      </div>
    </div>
    <AnimatedOnScroll animationIn="slideInRight" className="app__wrapper_img">
      <img src={images.laurels} alt="laurels" />
    </AnimatedOnScroll>
  </div>
);

export default Laurels;
