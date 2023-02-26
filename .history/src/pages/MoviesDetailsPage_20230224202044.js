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
          <div className="w-full h-screen bg-co"
          style={{background:`url(https://image.tmdb.org/t/p/w500/${data.backdrop_path})`
          }}>


          </div>
        </>
    );
};

export default MoviesDetailsPage;