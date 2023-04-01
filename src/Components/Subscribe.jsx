import React from "react";

const Subscribe = () => {
  return (
    <>
      <section className="subscribe">
        <div className="container">
          <div className="row  align-items-center">
            <div
              className="subLeft col-md-6"
              data-aos="zoom-in-up"
              data-aos-offset="300"
            >
              <img src="./images/s1.png" alt="" className="img-fluid " />
            </div>
            <div data-aos="zoom-in-down" className="subRight col-md-6">
              <h2>Subscribe And get Latest news update about NFTs.</h2>
              <p>
                In commodo auctor eget congue sit. Ultrices eget pretium sit
                euismod mi id. Risus, aliquam odio posuere ac in in nisl sed
                augue. Porta aenean egestas malesuada in pulvinar enim viverra.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
