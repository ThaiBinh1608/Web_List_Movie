import React from 'react';
import useSWR from "swr";
import {fetcher, tmdbAPI} from "../config"
import TVseriesList from '../components/TVseries/TvseriesList';

const TVseriesPage = () => {
    const {data} = useSWR(
        `
        https://api.themoviedb.org/3/tv/popular?api_key=95f2419536f533cdaa1dadf83c606027`,
        f
    )
    return (
        <div className='py-10'>
               <TVseriesList type='popular'></TVseriesList> 
        </div>
    );
};

export default TVseriesPage;