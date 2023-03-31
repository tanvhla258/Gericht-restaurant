import React from "react";

import "./SpecialMenu.css";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <AnimatedOnScroll
          animationIn="fadeInDown"
          className="app__specialMenu-menu_heading"
        >
          Wine & Beer
        </AnimatedOnScroll>
        <div className="app__specialMenu-menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              tags={wine.tags}
              price={wine.price}
              index={index}
            />
          ))}
        </div>
      </div>
      <AnimatedOnScroll
        animationIn="shake"
        className="app__specialMenu-menu_img"
      >
        <img src={images.menu} alt="menu img" />
      </AnimatedOnScroll>
      <div className="app__specialMenu-menu_cocktails flex__center">
        <AnimatedOnScroll
          animationIn="fadeInDown"
          className="app__specialMenu-menu_heading"
        >
          Cocktails
        </AnimatedOnScroll>
        <div className="app__specialMenu-menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              tags={cocktail.tags}
              price={cocktail.price}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: "15px" }}>
      <button className="custom__button" type="button">
        More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
