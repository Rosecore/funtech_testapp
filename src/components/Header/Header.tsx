"use client";
import Link from "next/link";
import Button from "../Button/Button";
import "./Header.scss";
import Image from "next/image";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 375);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__nav-icon">
          <Link href="/" className="header__logo">
            <Image
              src={"/waveBlack.png"}
              alt="wave-icon"
              width={53}
              height={53}
            />
          </Link>
        </div>

        {isMobile && (
          <button className="header__menu-button" onClick={toggleMenu}>
            <div className={`header__menu-icon ${isMenuOpen ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        )}

        <nav
          className={`header__nav ${
            isMobile ? (isMenuOpen ? "active" : "") : ""
          }`}
        >
          <Link href="/products" className="header__nav-link">
            discover
          </Link>
          <Link href="/about" className="header__nav-link">
            creators
          </Link>
          <Link href="/contacts" className="header__nav-link">
            sell
          </Link>
          <Link href="/contacts" className="header__nav-link">
            stats
          </Link>
        </nav>

        <div className="header__button">
          <Button>connect wallet</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
