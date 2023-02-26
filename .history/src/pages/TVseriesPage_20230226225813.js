import React from 'react';
import useSWR from "swr";
import {fetcher, tmdbAPI} from "../config"
import TVseriesCard from '../components/TVseries/TVseriesCard';
import useDebounce from '../hooks/useDebounce';
import ReactPaginate from "react-paginate";
//https://api.themoviedb.org/3/search/tv?api_key=
const itemsPerPage=20;
const TVseriesPage = () => {
 
    const filterDebounce = useDebounce(filter,500);
    const [filter, setFilter] =useState("");
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    }
    const {data} = useSWR(
        `
        https://api.themoviedb.org/3/tv/popular?api_key=95f2419536f533cdaa1dadf83c606027`,
        fetcher
    )

    
   
    const tv = data?.results ||[];
    return (
        <div className='py-10'>
          <div className="flex mb-10">
            <div className="flex-1">
                <input type="text" className= "w-full p-4 bg-slate-700 text-white outline-none" placeholder="Search movie..."
                   onChange={handleFilterChange}
                />

            </div>
            <button className='p-4 bg-primary text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

            </button>
        </div>
               <div className="grid grid-cols-4 grap-10">
                {tv.length > 0  && tv.map(item =>(
                    <TVseriesCard key={item.id} item={item}></TVseriesCard>
                ))}
               </div>
        </div>
    );
};

export default TVseriesPage;