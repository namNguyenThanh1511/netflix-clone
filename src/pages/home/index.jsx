import React from "react";
import Header from "../../component/header";

import Carousel from "../../component/carousel";

function HomePage() {
  return (
    <div>
      <Carousel numberOfSlide={1} category={"Trending"} />

      <Carousel numberOfSlide={6} category={"Horror"} isUseNavigation={true} title="Horror movie" />
      <Carousel numberOfSlide={6} category={"Comedy"} isUseNavigation={true} title="Comedy" />
    </div>
  );
}

export default HomePage;
