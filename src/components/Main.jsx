import React from "react";
import '../css/main.css'
import Search from "./Search";
import ServicesContainer from "./ServicesContainer";
import Header from "./Header";
import AdvertisingBanner from "./AdvertisingBanner";

export default function Main() {
  return (
    <div className='main'>
      <Header>
      </Header>
      <Search></Search>
      <AdvertisingBanner></AdvertisingBanner>
      <ServicesContainer>
      </ServicesContainer>
    </div>
  );
}
