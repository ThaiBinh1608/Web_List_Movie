import React from "react";

const TVseriesCard = ({ item }) => {
  const { title, vote_average, release_date, poster_path } = item;

  return (
    <div className="tv-card flex flex-col h-full rounded-lg p-3 bg-slate-800 text-white select-none">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">

      <h3 className="text-2xl font-bold mb-3">{name}</h3>

      <div className="flex items-center justify-between opacity-50 mb-10">
        <span>{new Date(release_date).getFullYear()}</span>
        <span>{vote_average}</span>
      </div>
      <button className="py-3 px-6 rounded-lg capitalize bg-primary w-full mt-auto">
        Watch Now
      </button>
      </div>
    </div>
  );
};

export default TVseriesCard;
