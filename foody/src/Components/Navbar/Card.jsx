import React from 'react'
import image1 from '../../assets/images/img1.jpeg'
import image2 from '../../assets/images/img2.jpeg'
import image3 from '../../assets/images/img3.jpeg'
import image4 from "../../assets/images/img4.jpeg";
import image5 from "../../assets/images/img5.jpeg";
import image6 from "../../assets/images/img6.jpeg";
import image7 from "../../assets/images/img7.jpeg";
import image8 from "../../assets/images/img8.jpeg";
const Card = () => {
  return (
    <>
      <div class="cards">
        <div class="innerCard">
          <img src={image1} alt="img1" />
        </div>
        <div class="innerCard">
          <img src={image2} alt="img2" />
        </div>
        <div class="innerCard">
          <img src={image3} alt="img3" />
        </div>
        <div class="innerCard">
          <img src={image4} alt="img4" />
        </div>
      </div>
      <div class="cards">
        <div class="innerCard">
          <img src={image5} alt="img5" />
        </div>
        <div class="innerCard">
          <img src={image6} alt="img6" />
        </div>
        <div class="innerCard">
          <img src={image7} alt="img7" />
        </div>
        <div class="innerCard">
          <img src={image8} alt="img8" />
        </div>
      </div>
      <div class="cards">
        <div class="innerCard">
          <img src={image5} alt="img5" />
        </div>
        <div class="innerCard">
          <img src={image6} alt="img6" />
        </div>
        <div class="innerCard">
          <img src={image7} alt="img7" />
        </div>
        <div class="innerCard">
          <img src={image8} alt="img8" />
        </div>
      </div>
    </>
  );
}

export default Card