import { HeaderProps } from "@/app/page";
import "./window-control-circles.css";

export default function WindowControlCircles({ onChangeViewMode }: HeaderProps) {
  return (
    <div className="window-control-circles">
      <span
        className="circle red"
        onClick={() => onChangeViewMode("normal")}
      />
      <span
        className="circle yellow"
        onClick={() => onChangeViewMode("iphone")}
      />
      <span
        className="circle green"
        onClick={() => onChangeViewMode("macbook")}
      />
    </div>
  );
}