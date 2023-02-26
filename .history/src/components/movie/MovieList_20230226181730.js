import React, { useEffect, useState } from 'react';
import {Swiper,SwiperSlide} from "swiper/react";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import {fetcher, tmdbAPI} from "../../config.js"

//https://api.themoviedb.org/3/movie/now_playing?api_key=ccd2fb4b6c71b6649a8e1b8c8338a19e
const MovieList = ({type = 'now_playing'}) => {

    const { data } = useSWR(tmdbAPI.getMovieList(), fetcher);


    const movies = data?.results || [];

   
    return (
        <div className="movie-list">
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}> 
        {movies.length > 0 && movies.map(item =>(
         <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
         </SwiperSlide>
        ))}  
        </Swiper>
      </div>
    );
};

export default MovieList;