import React from 'react';
import  useSWR from 'swr';
import { fetcher } from '../config';
import { useParams } from 'react-router-dom';
//https:api.themoviedb.org/3/movie/{movie_id}?api_key=ccd2fb4b6c71b6649a8e1b8c8338a19
const MoviesDetailsPage = () => {
    const {movieId} = useParams();
    const {data error}
    return (
        <div>
            
        </div>
    );
};

export default MoviesDetailsPage;