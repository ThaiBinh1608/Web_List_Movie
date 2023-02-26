import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../config";
const TVseriesDetailsPage = () => {
  const {tvId} = useParams();
  return (
    <div>
      
    </div>
  );
};

export default TVseriesDetailsPage;