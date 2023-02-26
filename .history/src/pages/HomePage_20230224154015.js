import React, { Fragment } from 'react';
import MovieList from "../components/movie/MovieList";
import TVseriesList from '../components/TVseries/TvseriesList';

const HomePage = () => {
    return (
        <Fragment>
            <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white  mb-10 text-3xl font-bold">
          Now Playing
        </h2>

        <MovieList></MovieList>
            </section>

            <section className="movies-layout page-container pb-20">
                <h2 className="capitalize text-white  mb-10 text-3xl font-bold">
                Top Rated
                </h2>

                <MovieList type="top_rated"></MovieList>
            </section>

            <section className="tv-layout page-container pb-20">
                <h2 className="capitalize text-white  mb-10 text-3xl font-bold">
                TV Series
                </h2>

                <TVseriesList type="popular"></TVseriesList>
            </section>
        </Fragment>
    );
};

export default HomePage;