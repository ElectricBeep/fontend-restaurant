import React from 'react';

import './Chef.css';
import { images } from "../../constants";
import { SubHeading } from "../../components";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading tilte="Shef's Word" />
      <h1 className="headtext__cormorant">
        What We Believe In
      </h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita animi maiores
          saepe modi adipisci ullam nobis distinctio, neque a dignissimos quo laborum
          enim voluptatibus veritatis libero, inventore, corporis nesciunt et.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
