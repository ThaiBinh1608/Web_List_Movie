import React from 'react';
import  useSWR from 'swr';
import { fetcher } from '../config';
import { useParams } from 'react-router-dom';

const MoviesDetailsPage = () => {
    const {movieId} = useParams();
    return (
        <div>
            
        </div>
    );
};

export default MoviesDetailsPage;