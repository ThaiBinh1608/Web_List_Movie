import React from 'react';
import { useSWRConfig } from 'swr';
import { useParams } from 'react-router-dom';

const MoviesDetailsPage = () => {
    const {movieId} = useParams();
    return (
        <div>
            
        </div>
    );
};

export default MoviesDetailsPage;