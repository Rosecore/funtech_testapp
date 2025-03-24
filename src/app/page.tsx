import Button from "@/components/Button/Button";

import "./page.scss";
import AnimatedImage from "@/components/AnimatedImage/AnimatedImage";
import AdditionalInfo from "@/components/AdditionalInfo/AdditionalInfo";
import ExploringComponent from "@/components/ExploringComponent/ExploringComponent";
import Carousel from "@/components/Carousel/Carousel";

export default function Home() {
  return (
    <main className="home">
      <div className="home__container">
        <section className="home__hero">
          <p className="home__hero--header">Discover And Create NFTs</p>
          <p className="home__hero--small_p">
            Discover, Create and Sell NFTs On Our NFT Marketplace With Over
            Thousands Of NFTs And Get a{" "}
            <span className="small_p--bold">$20 bonus.</span>
          </p>
          <div className="home__buttons">
            <Button>Explore more</Button>
            <Button type="initial-white">Create NFT</Button>
          </div>
          <div className="home__hero--additional">
            <AdditionalInfo numbers="1000+" small="NFTs" />
            <AdditionalInfo numbers="100+" small="Creators" />
            <AdditionalInfo numbers="1000+" small="Transactions" />
          </div>
        </section>
        <div className="home__hero__images">
          <AnimatedImage src="/sphere2.png" alt="sphere2" position="first" />
          <AnimatedImage src="/sphere1.png" alt="sphere1" position="second" />
          <AnimatedImage src="/arrowIcon.png" alt="arrow" position="arrow" />
          <AnimatedImage
            src="/dots.png"
            alt="background-dots"
            position="dots"
          />
        </div>
      </div>
      <div className="home__products">
        <Carousel />
      </div>
      <ExploringComponent />
    </main>
  );
}
