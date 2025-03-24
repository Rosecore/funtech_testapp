import Image from "next/image";
import "./AnimatedImage.scss";

interface AnimatedImageProps {
  src: string;
  alt: string;
  position: "first" | "second" | "arrow" | "dots";
}

const AnimatedImage = ({ src, alt, position }: AnimatedImageProps) => {
  return (
    <div className={`animated-image animated-image--${position}`}>
      <Image src={src} alt={alt} fill={true} />
    </div>
  );
};

export default AnimatedImage;
