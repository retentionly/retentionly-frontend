import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SliderItem from './SliderItem';

const StatSlider = ({ data }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <Slider {...settings}>
      {
        data.map((item, index) => (<SliderItem data={item} />))
      }
    </Slider>
  )
}

export default StatSlider