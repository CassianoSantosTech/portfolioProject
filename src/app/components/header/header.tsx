import { HeaderProps } from "@/app/page";
import { useLanguage } from "@/contexts/ContextLanguage";
import { useState } from "react";
import { MdOutlinePhoneIphone, MdTranslate } from "react-icons/md";
import { RiMacbookLine } from "react-icons/ri";
import WindowControlCircles from "../window-control-circles/window-control-circles";
import "./header.css";
// import { BsTranslate } from "react-icons/bs";



export default function Header({ onChangeViewMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, translations } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="window-control-circles">
        <WindowControlCircles onChangeViewMode={onChangeViewMode} />
      </div>
      <div className="device-icons">
        <div className="tooltip-container">
          <MdOutlinePhoneIphone className="icon-phone" />
          <span className="tooltip">{translations[language].phoneFrame}</span>
        </div>
        <div className="tooltip-container">
          <RiMacbookLine className="icon-mac" />
          <span className="tooltip">{translations[language].laptopFrame}</span>
        </div>
      </div>
      <nav className="options-header">
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li><a href="#welcome">{translations[language].welcome}</a></li>
          <li><a href="#about">{translations[language].about}</a></li>
          <li><a href="#projects">{translations[language].projects}</a></li>
          <li><a href="#contacts">{translations[language].contact}</a></li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <section className="tooltip-container translate-section">
          <button className="translate-style" onClick={toggleLanguage}>
          <MdTranslate></MdTranslate>
          </button>
          <span className="tooltip">{translations[language].changeLanguage}</span>
        </section>
      </nav>
    </header>
  );
}