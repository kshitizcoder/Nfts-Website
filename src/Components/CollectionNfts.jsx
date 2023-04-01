import React, { useEffect, useState } from "react";
import { nftsCollection } from "../Dummytext/Dummy";
const CollectionNfts = () => {
  const [collectNfts, setCollectNfts] = useState([]);
  useEffect(() => {
    setCollectNfts(nftsCollection);
  }, []);
  return (
    <>
      <section id="community" className="nftsCollection">
        <div className="container">
          <div className="row text-center">
            <h2>NFTs collections</h2>
            <p>
              Ultrices eget pretium sit euismod mi id posuere ac in in nisl sed
              augue.
            </p>
            <div>
              <div className="row">
                {nftsCollection.map((val) => {
                  return (
                    <div
                      className="col-md-6 col-lg-3 nftsItem"
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-right"
                    >
                      <div className="nft-coll-wapper">
                        <img src={val.image} alt="" className="img-fluid" />
                        <h4>Broken collection</h4>
                        <a href="#">View Collection</a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      '
    </>
  );
};

export default CollectionNfts;
