import React from "react";
import { SubHeading } from "../../components";
import images from "../../constants/images";
import "./Header.css";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

const Header = () => (
  <div className="app__header  section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The key to Find Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet illo
        eum deleniti facilis consequatur commodi veniam repudiandae accusantium
        aspernatur. Optio voluptates architecto praesentium impedit laboriosam
        modi! Iure similique dolore nemo. Laudantium saepe mollitia voluptate
      </p>
      <button to="menu" type="button" className="custom__button">
        <a href="#menu">Explore Menu</a>
      </button>
    </div>
    <AnimatedOnScroll
      className="app__header-img"
      animationInDuration={1000}
      animationIn="slideInRight"
    >
      <img src={images.welcome} alt="header img" />
    </AnimatedOnScroll>
  </div>
);

export default Header;
