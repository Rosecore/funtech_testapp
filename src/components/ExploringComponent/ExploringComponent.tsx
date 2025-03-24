import React from "react";
import Button from "../Button/Button";
import Image from "next/image";
import "./ExploringComponent.scss";

const ExploringComponent = () => {
  return (
    <section className="main-block">
      <div className="main-block--info">
        <p className="main-block--info__header">Create and Sell NFTs</p>
        <p className="main-block--info__small-text">
          World’s Largest NFT Place
        </p>
        <div className="main-block--buttons">
          <Button type="initial-white">Explore more</Button>
          <Button>Sell artwork</Button>
        </div>
      </div>
      <div className="main-block--image">
        <Image src="/image4.png" alt="sphere2" fill={true} />
      </div>
    </section>
  );
};

export default ExploringComponent;
