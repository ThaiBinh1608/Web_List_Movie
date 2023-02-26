import React from 'react';
import  useSWR from 'swr';
import { apiKey,fetcher } from '../config';
import { useParams } from 'react-router-dom';
//https:api.themoviedb.org/3/movie/{movie_id}?api_key=ccd2fb4b6c71b6649a8e1b8c8338a19
const MoviesDetailsPage = () => {
    const {movieId} = useParams();
    const {data, error} =  useSWR(`https:api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`, fetcher);
    return (
        <>
          <div className="w-full h-[600px] relative ">
          <div className='absolute inset-0 bg-black bg-opacity-25'></div>
            <div className="w-full h-full bg-cover bg-no-repeat" style={{
                backgroundImage:`url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`
            }}></div>

          </div>
        </>
    );
};

export default MoviesDetailsPage;