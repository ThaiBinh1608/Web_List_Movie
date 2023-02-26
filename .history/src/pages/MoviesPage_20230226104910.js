import React, { useEffect, useState } from 'react';
import useSWR from "swr";
import {fetcher} from "../config"
import MovieCard from '../components/movie/MovieCard';
import useDebounce from '../hooks/useDebounce';

//https://api.themoviedb.org/3/search/movie?api_key=
const MoviesPage = () => {
    const [filter, setFilter] =useState("");
    const [url, setUrl] = useState("https://api.themoviedb.org/3/movie/popular?api_key=ccd2fb4b6c71b6649a8e1b8c8338a19e");
    const filterDebounce = useDebounce(filter,500);
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    }
    const { data , error} = useSWR(url, fetcher);
    const loading = !data && !error;
    useEffect(() => {
        if(filterDebounce) {
            setUrl(`https://api.themoviedb.org/3/search/movie?api_key=ccd2fb4b6c71b6649a8e1b8c8338a19e&query=${filterDebounce}`);
        }else {
            setUrl(`https://api.themoviedb.org/3/movie/popular?api_key=ccd2fb4b6c71b6649a8e1b8c8338a19e`)
        }
        
    },[filterDebounce]);

    const movies = data?.results || [];

    return (
        <div className='py-10 page-container'>
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
        {loading && (<div className='w-10 h-10 rounded-full border-primary border-t-transparent border-t-4
        mx-auto animate-spin'></div>) }
          <div className="grid grid-cols-4 gap-10">
            {!loading && movies.length > 0 && movies.map(item =>(
                <MovieCard item={item}></MovieCard>
            ))}
            </div>
            <div className="flex items-center justify-center">
                <span></span>
                <span>1</span>
                <span>1</span>
                <span>1</span>
                <span>1</span>
                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>
</span>      
            </div>
        </div>
    );
};

export default MoviesPage;