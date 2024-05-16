import React, { useEffect, useState } from "react";
import "./index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import axios from "axios";

function Carousel({ numberOfSlide, category, isUseNavigation = false, title }) {
  //isUseNavigation = false : default value
  //Props
  const [movieList, setMovieList] = useState([]);
  const fetchMovie = async () => {
    const response = await axios.get("https://6627a8d5b625bf088c092ecf.mockapi.io/Movie");
    setMovieList(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    fetchMovie();
  }, []);
  return (
    <div className={`carousel ${numberOfSlide > 1 ? "multi-item" : ""}`}>
      {/* chỉ show title khi và chỉ khi có title => nếu title === null => ko show title*/}
      {title && <h1>{title}</h1>}
      <Swiper
        navigation={isUseNavigation}
        spaceBetween={20}
        slidesPerView={numberOfSlide}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar, Navigation]}
      >
        {/*each movies => Swiper Slide*/}
        {/*each movies inside movieList => Swiper Slide*/}
        {movieList
          .filter((movie) => movie.category === category)
          .map((movie) => (
            <SwiperSlide key={movie.id}>
              <img className="carousel__img" src={movie.poster_path} alt="" />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
