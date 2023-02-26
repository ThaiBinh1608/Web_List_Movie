import React from 'react';
import useSWR from "swr";
import {fetcher, tmdbAPI} from "../config"
import TVseriesList from '../components/TVseries/TvseriesList';
import TVseriesCard from '../components/TVseries/TVseriesCard';

const TVseriesPage = () => {
    const {data} = useSWR(
        `
        https://api.themoviedb.org/3/tv/popular?api_key=95f2419536f533cdaa1dadf83c606027`,
        fetcher
    )
    const tv = data?.results ||[];
    console.log(tv);
    return (
        <div className='py-10'>
               <div className="grid grid-cols-4 grap-10">
                {tv.length > 0  && tv.map(item =>(
                    <TVseriesCard key={item.id} item={item}></TVseriesCard>
                ))}
               </div>
        </div>
    );
};

export default TVseriesPage;