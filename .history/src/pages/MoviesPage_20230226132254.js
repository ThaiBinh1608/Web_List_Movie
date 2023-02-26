import React, { useEffect, useState } from 'react';
import useSWR from "swr";
import {fetcher} from "../config"
import MovieCard from '../components/movie/MovieCard';
import useDebounce from '../hooks/useDebounce';
import ReactPaginate from 'react-paginate';
//https://api.themoviedb.org/3/search/movie?api_key=
const PageCount = 5;
const itemsPerPage=20;
const MoviesPage = () => {

    const [itemOffset, setItemOffset] = useState(0);
    const []
    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    const pageCount = Math.ceil(items.length / itemsPerPage);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

    const [nextPage,setNextPage] =useState(1)
    const [filter, setFilter] =useState("");
    const [url, setUrl] = useState(`https://api.themoviedb.org/3/movie/popular?api_key=ccd2fb4b6c71b6649a8e1b8c8338a19e&page=${nextPage}`);
    const filterDebounce = useDebounce(filter,500);
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    }
    const { data , error} = useSWR(url, fetcher);
    const loading = !data && !error;
    useEffect(() => {
        if(filterDebounce) {
            setUrl(`https://api.themoviedb.org/3/search/movie?api_key=ccd2fb4b6c71b6649a8e1b8c8338a19e&query=${filterDebounce}&page=${nextPage}`);
        }else {
            setUrl(`https://api.themoviedb.org/3/movie/popular?api_key=ccd2fb4b6c71b6649a8e1b8c8338a19e&page=${nextPage}`)
        }
        
    },[filterDebounce,nextPage]);
    if(!data) return null;
    const movies = data?.results || [];
    // const {page, total_pages} = data;
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
            <div className="flex items-center justify-center mt-10 gap-x-5">
                <span className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                strokeWidth="1.5" stroke="currentColor"  className='w-6 h-6' onClick={() => setNextPage(nextPage -1)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
                </span>
                {new Array(PageCount).fill(0).map((item,index) =>(

                <span className='cursor-pointer inline-block py-2 px-4 leading-none rounded bg-white text-slate-900'
                onClick={() => setNextPage(index+1)}>
                {index+1}
                </span>
                ))}

                <span className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                strokeWidth="1.5" stroke="currentColor" className='w-6 h-6' onClick={() => setNextPage(nextPage +1)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
                </span>      
            </div>
        </div>
    );
};

export default MoviesPage;