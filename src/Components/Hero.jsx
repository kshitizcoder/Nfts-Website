import React from "react";
import Button from "./Button";
import banner from "../images/banner.png";
import backgroundText from "../images/background-text.png";
const Hero = () => {
  return (
    <>
      <section className="hero" id="hero">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="left col-md-7 col-lg-6"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h1
                style={{
                  backgroundImage: `url(${backgroundText})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundClip: "text",
                  color: "transparent",
                  webkitBackgroundClip: "text",
                }}
              >
                Best NFTs Marketplace
              </h1>
              <p>
                Ultrices eget pretium sit euismod mi id. In commodo auctor eget
                congue sit. Risus, aliquam odio posuere ac in in nisl sed augue.
                Porta aenean egestas malesuada in pulvinar enim viverra.
              </p>
              <Button text={"Sign Up"} style={"gradinetBtn signUp "} />
              <Button text={"Log In"} style={"boderBtn"} />
            </div>
            <div
              className="col-md-5 mt-sm-5 mt-lg-0 ms right"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="700"
            >
              <img src={banner} alt="#" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
