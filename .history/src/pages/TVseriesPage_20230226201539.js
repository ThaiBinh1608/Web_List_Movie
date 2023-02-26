import React from 'react';
import useSWR from "swr";
import {fetcher, tmdbAPI} from "../config"
import TVseriesList from '../components/TVseries/TvseriesList';

const TVseriesPage = () => {
    const {data} = useSWR(
        `
        https://api.themoviedb.org/3/tv/popular?api_key=95f2419536f533cdaa1dadf83c606027`,
        fetch
    )
    return (
        <div className='py-10'>
               <div className="grid grid-cols-4"></div>
        </div>
    );
};

export default TVseriesPage;