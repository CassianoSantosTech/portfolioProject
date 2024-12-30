import WindowControlCircles from '../window-control-circles/window-control-circles';
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <WindowControlCircles />
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#welcome">Welcome</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>
      </nav>
    </header>
  );

}
