import Image from "next/image";
import "./ProductCard.scss";
import Button from "../Button/Button";
import Timer from "../Timer/Timer";

interface ProductCardProps {
  title: string;
  currentBid: string;
  imageUrl: string;
}

const ProductCard = ({ title, currentBid, imageUrl }: ProductCardProps) => {
  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <Timer initialHours={7} initialMinutes={9} initialSeconds={36} />
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="product-card__image"
        />
      </div>
      <h3 className="product-card__title">{title}</h3>
      <div className="product-card__content">
        <div className="product-card__bid-text">
          Current Bid
          <p className="product-card__current-bid">
            <Image
              src={"/Vector.png"}
              alt={"bid-icon"}
              width={12}
              height={19}
              className="product-card__bid-icon"
            />
            {currentBid}
          </p>
        </div>
        <Button>PLACE BID</Button>
      </div>
    </div>
  );
};

export default ProductCard;
