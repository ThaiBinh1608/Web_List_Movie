import React, { useEffect, useState } from 'react';
import useSWR from "swr";
import {fetcher} from "../config"
import TVseriesCard from '../components/TVseries/TVseriesCard';
import useDebounce from '../hooks/useDebounce';
import ReactPaginate from "react-paginate";
//https://api.themoviedb.org/3/search/tv?api_key=
const itemsPerPage=20;
const TVseriesPage = () => {
    const [nextPage,setNextPage] =useState(1)
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
 
    const [url, setUrl] = useState( `https://api.themoviedb.org/3/tv/popular?api_key=95f2419536f533cdaa1dadf83c606027&page=${nextPage}`);
    const filterDebounce = useDebounce(filter,500);
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    }
   const {data,error} = useSWR(url , fetcher )
   
   const tv = data?.results ||[];
   useEffect(() => {
    if (!data || !data.total_results) return;
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data, itemOffset]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };
   const loading = !data && !error;
    useEffect(() => {
        if(filterDebounce) {
            setUrl(` https://api.themoviedb.org/3/search/tv?api_key=95f2419536f533cdaa1dadf83c606027&query=${filterDebounce}&page=${nextPage}`);
        }else {
            setUrl(`https://api.themoviedb.org/3/tv/popular?api_key=95f2419536f533cdaa1dadf83c606027&page=${nextPage}`);
        }
        
    },[filterDebounce,nextPage]);
   
    return (
        <div className='p-10'>
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
               <div className="grid grid-cols-4 grap-10">
                {!loading && tv.length > 0  && tv.map(item =>(
                    <TVseriesCard key={item.id} item={item}></TVseriesCard>
                ))}
               </div>
               <div className="mt-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
        </div>
    );
};

export default TVseriesPage;