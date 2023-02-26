import React from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import TVseriesCard from '../components/TVseries/TVseriesCard';
import { apiKey, fetcher, tmdbAPI } from "../config";
//https://api.themoviedb.org/3/tv/{tv_id}?api_key=
const TVseriesDetailsPage = () => {
  const {tvId} = useParams();
  const {data} = useSWR(`https://api.themoviedb.org/3/tv/${tvId}?api_key=95f2419536f533cdaa1dadf83c606027`, fetcher);
  console.log(data);
  if (!data) return null;
  const { backdrop_path, poster_path, name, genres, overview } = data;
  return (
    <div className="pb-10">
    <div className="w-full h-[600px] relative ">
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div
        className="w-full h-full bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${tmdbAPI.imageOriginal(backdrop_path)})`,
        }}
      ></div>
    </div>

    <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
      <img
        src={tmdbAPI.imageOriginal(poster_path)}
        className="w-full h-full object-cover rounded-xl"
        alt=""
      />
    </div>
    <h1 className="text-center text-4xl font-bold text-white mb-10">
      {name}
    </h1>
    {genres.length > 0 && (
      <div className="flex items-center justify-center gap-x-5 mb-10">
        {genres.map((item) => (
          <span
            className="py-2 px-4 border-primary text-primary border rounded"
            key={item.id}
          >
            {item.name}
          </span>
        ))}
      </div>
    )}
    <p className="text-center leading-relaxed max-w-[600px] mx-auto mb-10">
      {overview}
    </p>
    <TVCredits></TVCredits>
    <TVVideo></TVVideo>
    <TVSimilar></TVSimilar>
  </div>
);
};

function TVCredits() {
const {tvId } = useParams();
const { data } = useSWR(`https://api.themoviedb.org/3/tv/${tvId}/credits?api_key=95f2419536f533cdaa1dadf83c606027`, fetcher);
//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=
if (!data) return null;
const { cast } = data;
if (!cast || cast.lenght <= 0) return null;
return (
  <div className="py-10">
    <h2 className="text-center text-3xl mb-10">Diễn viên </h2>
    <div className="grid grid-cols-4 gap-5">
      {cast.slice(0, 4).map((item) => (
        <div className="cast-item p-3" key={item.id}>
          <img
            className="w-full h-[350px] object-cover rounded-lg mb-3 "
            src={tmdbAPI.imageOriginal(item.profile_path)}
            alt=""
          />
          <h3 className=" text-center text-xl font-medium">{item.name}</h3>
        </div>
      ))}
    </div>
  </div>
);
}

function TVVideo() {
const { tvId } = useParams();
const { data } = useSWR(tmdbAPI.getTVMeta(tvId, "videos"), fetcher);
if (!data) return null;
const { results } = data;
if (!results || results.length <= 0) return null;

return (
  <div className="p-10">
    <div className="flex flex-col gap-5">
      {results.slice(0, 1).map((item) => (
        <div className="" key={item.id}>
          <h3 className="mb-5 text-xl font-medium p-3 bg-primary inline-block">
            Trailer Phim
          </h3>
          <div key={item.id} className="w-full aspect-video">
            <iframe
              width="900"
              height="506"
              src={`https://www.youtube.com/embed/${item.key}`}
              title="Youtube"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full object-fill"
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

function TVSimilar() {
const { movieId } = useParams();
const { data } = useSWR(tmdbAPI.getTVMeta(movieId, "similar"), fetcher);
//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=
if (!data) return null;
const { results } = data;
if (!results || results.length <= 0) return null;
return (
  <div className="py-10">
    <h2 className="text-3xl font-medium mb-5">Phim cùng thể loại </h2>
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {results.length > 0 &&
          results.map((item) => (
            <SwiperSlide key={item.id}>
              <TVseriesCard item={item}></TVseriesCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  </div>
);
}

export default TVseriesDetailsPage;