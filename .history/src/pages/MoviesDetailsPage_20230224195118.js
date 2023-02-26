import React from 'react';
import  useSWR from 'swr';
import { Fetcher } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const MoviesDetailsPage = () => {
    const {movieId} = useParams();
    return (
        <div>
            
        </div>
    );
};

export default MoviesDetailsPage;