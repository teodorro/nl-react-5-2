import React from "react";
import "../css/main.css";
import Search from "./Search";
import ServicesContainer from "./ServicesContainer";
import Header from "./Header";
import AdvertisingBanner from "./AdvertisingBanner";
import MapGermany from "./service-components/MapGermany";
import Popular from "./service-components/Popular";
import Streams from "./service-components/Streams";
import TvProgram from "./service-components/TvProgram";
import Weather from "./service-components/Weather";
import News from "./News";
import Grammar from "./Grammar";

export default function Main() {
  return (
    <div className="main">
      <Header>

      <News />
      <Grammar />
      </Header>
      <Search></Search>
      <AdvertisingBanner></AdvertisingBanner>
      <ServicesContainer>
        <Weather></Weather>
        <MapGermany></MapGermany>
        <Streams></Streams>
        <Popular></Popular>
        <TvProgram></TvProgram>
      </ServicesContainer>
    </div>
  );
}
