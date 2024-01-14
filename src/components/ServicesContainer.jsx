import React from "react";
import "../css/main.css";
import MapGermany from "./service-components/MapGermany";
import Popular from "./service-components/Popular";
import Streams from "./service-components/Streams";
import TvProgram from "./service-components/TvProgram";
import Weather from "./service-components/Weather";

export default function ServicesContainer() {
  return (
    <div className="bd services-container">
      ServicesContainer
      <div className="services-list">
      <Weather></Weather>
      <MapGermany></MapGermany>
      <Streams></Streams>
      <Popular></Popular>
      <TvProgram></TvProgram>
      </div>
    </div>
  );
}
