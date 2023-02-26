import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const { title, vote_average, release_date, poster_path, id } = item;
  const navgate = useNavigate();

  return (
    <div className="movie-card flex flex-col h-full rounded-lg p-3 bg-slate-800 text-white select-none">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">

      <h3 className="text-2xl font-bold mb-3">{title}</h3>

      <div className="flex items-center justify-between opacity-50 mb-10">
        <span>{new Date(release_date).getFullYear()}</span>
        <span>{vote_average}</span>
      </div>
      <button onClick={() => navigate(`/movie/${}`)} className="py-3 px-6 text-2xl  rounded-lg capitalize bg-primary w-full mt-auto">
        Xem ngay
      </button>
      </div>
    </div>
  );
};

export default MovieCard;
