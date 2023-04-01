import React, { useEffect, useState } from "react";
import { topCreators } from "../Dummytext/Dummy";
import Button from "./Button";

const TopCreator = () => {
  const [creator, setCreator] = useState([]);

  useEffect(() => {
    setCreator(topCreators);
  }, []);
  return (
    <>
      <section id="artist" className="topCreators">
        <div className="container">
          <div className="row">
            <h2 className="text-center">Top Creators</h2>
            <p className="text-center">
              In commodo auctor eget congue sit. Ultrices eget pretium sit
              euismod mi id. Risus, aliquam odio posuere ac in in nisl sed
              augue. Porta aenean egestas malesuada in pulvinar enim viverra.
            </p>

            <div className="row creators-box">
              {creator.map((val) => {
                return (
                  <>
                    <div
                      className="col-md-6 col-lg-3 creators"
                      data-aos="zoom-in"
                    >
                      <div className="wrapper-creator">
                        <img src={val.image} className="img-fluid" />
                        <h4>{val.name}</h4>
                        <Button
                          text={"View Details"}
                          style={"viewDetailsBtn"}
                        />
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopCreator;
