import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from "swr";
import { apiKey, fetcher } from "../config";
//https://api.themoviedb.org/3/tv/{tv_id}?api_key=
const TVseriesDetailsPage = () => {
  const {tvId} = useParams();
  const {data} = useSWR(tmdbAPI.getMovieDetails(tvId), fetcher);
  console.log(data);
  return (
    <div>

    </div>
  );
};

export default TVseriesDetailsPage;