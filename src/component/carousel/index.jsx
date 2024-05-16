import React, { useEffect, useState } from "react";
import "./index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import axios from "axios";
import { Image } from "antd";
function Carousel({ numberOfSlide, category }) {
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
    <div className="carousel">
      <Swiper
        spaceBetween={30}
        slidesPerView={numberOfSlide}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="carousel"
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
