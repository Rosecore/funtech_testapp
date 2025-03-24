import "./Footer.scss";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <Link href="/" className="footer__logo-icon">
            <Image
              src={"/waveWhite.png"}
              alt="wave-icon"
              width={53}
              height={53}
            ></Image>
          </Link>
          DiveSea
        </div>
        <div className="footer__info">
          <p className="footer__info--header">Privacy Policy</p>
          <p className="footer__info--small">Terms and conditions</p>
          <p className="footer__info--small">About Us</p>
          <p className="footer__info--small">Contact</p>
        </div>
      </div>
      <div className="footer__socials">
        <p className="footer__socials--header">© 2023</p>
        <div className="footer__socials-icons"></div>
      </div>
    </footer>
  );
};

export default Footer;
