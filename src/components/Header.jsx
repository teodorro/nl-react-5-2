import React from "react";
import "../css/main.css";
import News from "./News";
import Grammar from "./Grammar";

export default function Header() {
  return (
    <div className="bd">
      Header
      <News />
      <Grammar />
    </div>
  );
}