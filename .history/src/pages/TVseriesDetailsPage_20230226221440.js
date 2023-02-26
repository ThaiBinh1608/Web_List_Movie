import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from "swr";
import { apiKey, fetcher, tmdbAPI } from "../config";
//https://api.themoviedb.org/3/tv/{tv_id}?api_key=
const TVseriesDetailsPage = () => {
  const {tvId} = useParams();
  const {data} = useSWR(`https://api.themoviedb.org/3/tv/${tvId}?api_key=${apiKey}`, fetcher);
  console.log(JSON.stringify(data));
  return (
    <div>
      
    </div>
  );
};

export default TVseriesDetailsPage;