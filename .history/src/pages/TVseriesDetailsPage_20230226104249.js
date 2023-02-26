import React from "react";
import useSWR from "swr";
import { apiKey, fetcher } from "../config";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../components/movie/MovieCard";
const TVseriesDetailsPage = () => {
   
  );
};

// function MovieCredits() {
//   const { movieId } = useParams();
//   const { data } = useSWR(
//     `https://api.themoviedb.org/3/tv/${movieId}/credits?api_key=${apiKey}`,
//     fetcher
//   );

//   if (!data) return null;
//   const { cast } = data;
//   if (!cast || cast.lenght <= 0) return null;
//   return (
//     <div className="py-10">
//       <h2 className="text-center text-3xl mb-10">Diễn viên </h2>
//       <div className="grid grid-cols-4 gap-5">
//         {cast.slice(0, 4).map((item) => (
//           <div className="cast-item p-3" key={item.id}>
//             <img
//               className="w-full h-[350px] object-cover rounded-lg mb-3 "
//               src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
//               alt=""
//             />
//             <h3 className=" text-center text-xl font-medium">{item.name}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function MovieVideo() {
//   const { movieId } = useParams();
//   const { data } = useSWR(
//     `https://api.themoviedb.org/3/tv/${movieId}/videos?api_key=${apiKey}`,
//     fetcher
//   );
//   if (!data) return null;
//   const { results } = data;
//   if (!results || results.length <= 0) return null;

//   return (
//     <div className="p-10">
//       <div className="flex flex-col gap-5">
//         {results.slice(0, 1).map((item) => (
//           <div className="" key={item.id}>
//             <h3 className="mb-5 text-xl font-medium p-3 bg-primary inline-block">
//               Trailer Phim
//             </h3>
//             <div key={item.id} className="w-full aspect-video">
//               <iframe
//                 width="900"
//                 height="506"
//                 src={`https://www.youtube.com/embed/${item.key}`}
//                 title="Youtube"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 allowFullScreen
//                 className="w-full h-full object-fill"
//               ></iframe>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function MovieSimilar() {
//   const { movieId } = useParams();
//   const { data } = useSWR(
//     `https://api.themoviedb.org/3/tv/${movieId}/similar?api_key=${apiKey}`,
//     fetcher
//   );
//   //https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=
//   if (!data) return null;
//   const { results } = data;
//   if (!results || results.length <= 0) return null;
//   return (
//     <div className="py-10">
//       <h2 className="text-3xl font-medium mb-5">Phim cùng thể loại </h2>\
//       <div className="movie-list">
//         <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
//           {results.length > 0 &&
//             results.map((item) => (
//               <SwiperSlide key={item.id}>
//                 <MovieCard item={item}></MovieCard>
//               </SwiperSlide>
//             ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }


export default TVseriesDetailsPage;