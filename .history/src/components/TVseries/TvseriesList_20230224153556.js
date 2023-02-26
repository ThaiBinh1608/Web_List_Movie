
import {Swiper,SwiperSlide} from "swiper/react";
import TVseriesCard from './TVseriesCard.js';
import useSWR from "swr";
import {fetcher} from "../../config"

//https://api.themoviedb.org/3/movie/now_playing?api_key=ccd2fb4b6c71b6649a8e1b8c8338a19e
const TVseriesList = ({type = 'now_playing'}) => {

    const { data } = useSWR(`https://api.themoviedb.org/3/tv/${type}?api_key=ccd2fb4b6c71b6649a8e1b8c8338a19e`, fetcher);


    const tv = data?.results || [];

   
    return (
        <div className="tv-list">

        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        
        {tv.length > 0 && tv.map(item =>(


         <SwiperSlide key={item.id}>
              <TVseriesCard item={item}></TVseriesCard>
         </SwiperSlide>
        ))}

         
        </Swiper>
      </div>
    );
};

export default TVseriesList;