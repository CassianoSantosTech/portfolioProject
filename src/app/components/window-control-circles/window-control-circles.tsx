import { HeaderProps } from "@/app/page";
import { useEffect, useState } from "react";
import "./window-control-circles.css";

export default function WindowControlCircles({ onChangeViewMode }: HeaderProps) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1250 && window.innerHeight < 720);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div className="window-control-circles">
      <div className="tooltip-container">
        <span
          className={`circle red ${isSmallScreen ? "disabled" : ""}`}
          onClick={() => !isSmallScreen && onChangeViewMode("normal")}
        />
        {isSmallScreen && <span className="tooltip">Funcionalidade para telas maiores</span>}
      </div>

      <div className="tooltip-container">
        <span
          className={`circle yellow ${isSmallScreen ? "disabled" : ""}`}
          onClick={() => !isSmallScreen && onChangeViewMode("iphone")}
        />
        {isSmallScreen && <span className="tooltip">Funcionalidade para telas maiores</span>}
      </div>

      <div className="tooltip-container">
        <span
          className={`circle green ${isSmallScreen ? "disabled" : ""}`}
          onClick={() => !isSmallScreen && onChangeViewMode("macbook")}
        />
        {isSmallScreen && <span className="tooltip">Funcionalidade para telas maiores</span>}
      </div>
    </div>
  );
}
