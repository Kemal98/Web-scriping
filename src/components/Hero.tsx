"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";
import Cards from "./Cards";

const Hero = ({product}:any) => {
  console.log(product)
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/banner-1.png",
    },
    {
      id: 1,
      img: "https://i.imgur.com/6zM7JBq.png",

    },
    {
      id: 2,
      img: "https://geekflare.com/wp-content/uploads/2022/10/Bright-Data-Collector-Makes-Web-Scraping.png",
    },
  ];

  return (
    <div>
    
      <div className="container pt-4 lg:pt-0">
      <p className="md:py-3 text-center md:text-sm text-xs text-gray-5100">Simply copy the product link from Amazon,
         paste it into the input field, click the search button, 
         and our application will automatically gather all the essential
          information about the product from Amazon.
      </p>
        {product.length > 0  ? (
          <Cards product={product}/>
        ) :
        (
          <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
            />
          ))}
        </Slider>
        )}
      </div>
    </div>
  );
};

export default Hero;
