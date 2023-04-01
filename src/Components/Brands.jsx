import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Brands extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2,
            autoplaySpeed: 5000,
            arrows: false,
            dots: true,
            cssEase: "linear",
            autoplay: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplaySpeed: 5000,
            arrows: false,
            autoplay: true,
            dots: true,
            cssEase: "linear",
          },
        },
      ],
    };
    return (
      <section className="brands">
        <div className="container align-items-center justify-content-center">
          <Slider {...settings}>
            <div>
              <img src="../images/1.png" alt="" className="img-fluid" />
            </div>
            <div>
              <img src="../images/2.png" alt="" className="img-fluid" />
            </div>
            <div>
              <img src="../images/3.png" alt="" className="img-fluid" />
            </div>
            <div>
              <img src="../images/4.png" alt="" className="img-fluid" />
            </div>
            <div>
              <img src="../images/5.png" alt="" className="img-fluid" />
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}
export default Brands;
