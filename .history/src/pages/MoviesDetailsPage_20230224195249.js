import React from 'react';
import  useSWR from 'swr';
import { fetcher } from '../config';
import { useParams } from 'react-router-dom';
//
https:api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
const MoviesDetailsPage = () => {
    const {movieId} = useParams();
    return (
        <div>
            
        </div>
    );
};

export default MoviesDetailsPage;