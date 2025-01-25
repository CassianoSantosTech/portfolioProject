import { HeaderProps } from "@/app/page";
import { useState } from "react";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { RiMacbookLine } from "react-icons/ri";
import WindowControlCircles from "../window-control-circles/window-control-circles";
import "./header.css";


export default function Header({ onChangeViewMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="window-control-circles">
        <WindowControlCircles onChangeViewMode={onChangeViewMode} />
      </div>
      <div className="device-icons">
        <div className="tooltip-container">
          <MdOutlinePhoneIphone className="icon-phone" />
          <span className="tooltip">iPhone Frame</span>
        </div>
        <div className="tooltip-container">
          <RiMacbookLine className="icon-mac" />
          <span className="tooltip">MacBook Frame</span>
        </div>
      </div>
      <nav>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li><a href="#welcome">Welcome</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}