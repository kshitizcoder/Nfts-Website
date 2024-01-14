import React, { useEffect, useState } from "react";
import { Nft } from "../Dummytext/Dummy";
import Button from "./Button";
const NftsCollection = () => {
  const [nfts, setNfts] = useState([]);
  useEffect(() => {
    setNfts(Nft);
  }, []);
  return (
    <>
      <section id="marketplace" className="nfts">
        <div className="container">
          <div className="row ">
            <h2 className="text-center mb-4">Collect some NFTs</h2>
            {nfts.map((val) => {
              return (
                <div
                  className="col-md-4 my-sm-5 my-lg-0 image-wrapper"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  <div className="image">
                    <img src={val.profileImg} className="img-fluid" />
                  </div>
                  <div className="detailsBox">
                    <div className="details d-flex justify-content-between">
                      <h3>{val.name}</h3>
                      <strong>{val.price}</strong>
                    </div>
                    <div className="profile">
                      <img src={val.image} className="img-fluid" />
                      <small className="ms-2 fw-bold">{val.title}</small>
                    </div>
                    <Button text={"Place a Bid"} style={"bigPrimary"} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default NftsCollection;
