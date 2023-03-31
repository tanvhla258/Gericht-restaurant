import React from "react";

import "./Newsletter.css";

import SubHeading from "../SubHeading/SubHeading";

const Newsletter = () => (
  <div className="app__newletter">
    <div className="app__newsletter-heading">
      <SubHeading title={"Newsletter"} />
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__opensans">And never miss lastest Updates</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
      />
      <button className="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
