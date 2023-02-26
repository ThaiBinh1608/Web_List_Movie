import React from 'react';
import  useSWR from 'swr';
import { apiKey,fetcher } from '../config';
import { useParams } from 'react-router-dom';
//https:api.themoviedb.org/3/movie/{movie_id}?api_key=ccd2fb4b6c71b6649a8e1b8c8338a19
const MoviesDetailsPage = () => {
    const {movieId} = useParams();
    const {data, error} =  useSWR(`https:api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`, fetcher);
    if(!data) return null;
    const {backdrop_path, poster_path} =data;
    return (
        <>
          <div className="w-full h-[600px] relative mb-10 ">
          <div className='absolute inset-0 bg-black bg-opacity-25'></div>
            <div className="w-full h-full bg-cover bg-no-repeat" style={{
                backgroundImage:`url(https://image.tmdb.org/t/p/original/${backdrop_path})`
            }}></div>

          </div>

          <div className='w-full h-[300px] max-W-[800px] mx- '>
            <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} className='w-full h-full object-cover' alt="" />
          </div>
        </>
    );
};

export default MoviesDetailsPage;