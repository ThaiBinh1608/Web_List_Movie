import React from 'react';
import {Swiper,SwiperSlide} from "swiper/react";
import TVCard from "./TVCard";
import useSWR from "swr";
import {fetcher, tmdbAPI} from "../../config.js"

//https://api.themoviedb.org/3/movie/now_playing?api_key=ccd2fb4b6c71b6649a8e1b8c8338a19e
const TVList = ({type = 'popular'}) => {

    const { data } = useSWR(tmdbAPI.getTVList(type), fetcher);


    const movies = data?.results || [];

   
    return (
        <div className="tv-list">
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}> 
        {movies.length > 0 && movies.map(item =>(
         <SwiperSlide key={item.id}>
              <TVCard item={item}></TVCard>
         </SwiperSlide>
        ))}  
        </Swiper>
      </div>
    );
};

export default TVList;