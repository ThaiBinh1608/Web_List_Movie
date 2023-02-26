import React from 'react';
import  useSWR from 'swr';
import { apiKey,fetcher } from '../config';
import { useParams } from 'react-router-dom';
//https:api.themoviedb.org/3/movie/{movie_id}?api_key=ccd2fb4b6c71b6649a8e1b8c8338a19
const MoviesDetailsPage = () => {
    const {movieId} = useParams();
    const {data, error} =  useSWR(`https:api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`, fetcher);
    return (
        <div>
            
        </div>
    );
};

export default MoviesDetailsPage;