import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows, loader } from "../../features/movies/movieSlice";
import MovieCard from "../MoiveCard/MovieCard";
import "./MovieListing.scss";

import Slider from "react-slick";
import { Settings } from "../../common/setting";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  const loading = useSelector(loader);
  console.log("loading:", loading);

  let renderMovies,
    renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, i) => <MovieCard key={i} data={movie}></MovieCard>)
    ) : (
      <div className="moives-Error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, i) => <MovieCard key={i} data={show}></MovieCard>)
    ) : (
      <div className="moives-Error">
        <h3>{shows.Error}</h3>
      </div>
    );

  return loading ? (
    <div className="loading">
      <h1>Loading data....</h1>
    </div>
  ) : (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...Settings}>{renderMovies}</Slider>
        </div>
      </div>

      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          <Slider {...Settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
