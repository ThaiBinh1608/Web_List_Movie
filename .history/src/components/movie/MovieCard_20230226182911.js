import React from "react";
import {navigate, useNavigate } from "react-router-dom";
import Button from "../button/Button";

const MovieCard = ({ item }) => {
  const { title, vote_average, release_date, poster_path, id } = item;
  const navigate = useNavigate();

  return (
    <div className="movie-card flex flex-col h-full rounded-lg p-3 bg-slate-800 text-white select-none">
      <img
        src={tmd}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">

      <h3 className="text-2xl font-bold mb-3">{title}</h3>

      <div className="flex items-center justify-between opacity-50 mb-10">
        <span>{new Date(release_date).getFullYear()}</span>
        <span>{vote_average}</span>
      </div>
      <Button onClick={() => navigate(`/movie/${id}`)}>Xem ngay</Button>
      </div>
    </div>
  );
};

export default MovieCard;
