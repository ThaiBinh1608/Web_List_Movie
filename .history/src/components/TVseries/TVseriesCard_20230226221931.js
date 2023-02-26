import React from "react";
import { useNavigate } from "react-router-dom";
import { tmdbAPI } from "../../config";
const TVseriesCard = ({ item }) => {
  const { name, vote_average, first_air_date, poster_path,id } = item;
  const navigate = useNavigate();
  return (
    <div className="tv-card flex flex-col h-full rounded-lg p-3 bg-slate-800 text-white select-none">
      <img
         src={tmdbAPI.image500(poster_path)}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">

      <h3 className="text-2xl font-bold mb-3">{name}</h3>

      <div className="flex items-center justify-between opacity-50 mb-10">
        <span>{new Date(first_air_date).getFullYear()}</span>
        <span>{vote_average}</span>
      </div>
      <button  onClick={() => navigate(`/tv/${id}`)} className="py-3 px-6 rounded-lg capitalize bg-primary w-full mt-auto">
        Xem ngay
      </button>
      </div>
    </div>
  );
};

export default TVseriesCard;
