import React, { Fragment } from 'react';
import MovieList from "../components/movie/MovieList";
import TVseriesList from '../components/TVseries/TvseriesList';

const HomePage = () => {
    return (
        <Fragment>
            <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white  mb-10 text-4xl font-bold">
          Đề xuất
        </h2>

        <MovieList></MovieList>
            </section>

            <section className="movies-layout page-container pb-20">
                <h2 className="capitalize text-white  
                mb-10 text-4xl font-bold border-l-[] border-l-primary">
                Phim lẻ
                </h2>

                <MovieList type="top_rated"></MovieList>
            </section>

            <section className="tv-layout page-container  pb-20">
                <h2 className="capitalize text-white  mb-10 text-4xl font-bold">
                Phim bộ
                </h2>

                <TVseriesList type="popular"></TVseriesList>
            </section>
        </Fragment>
    );
};

export default HomePage;