import React from "react";

import "./MenuItem.css";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
const MenuItem = ({ title, price, tags, index }) => (
  <AnimatedOnScroll
    animationIn="fadeInDown"
    animationInDelay={index * 200}
    className="app__menuitem"
  >
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p_mormorant " style={{ color: "#DCCA87" }}>
          {title}
        </p>
      </div>

      <div className="app__menuitem-dash" />

      <div className="app__menuitem-price">
        <p className="p_mormorant ">{price}</p>
      </div>
    </div>
    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: "#AAA" }}>
        {tags}
      </p>
    </div>
  </AnimatedOnScroll>
);

export default MenuItem;
