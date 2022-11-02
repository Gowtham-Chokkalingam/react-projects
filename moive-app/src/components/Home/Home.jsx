import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";

import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const moiveText = "Harry";
  const seriesText = "Prison";
  useEffect(() => {
    dispatch(fetchAsyncMovies(moiveText));

    dispatch(fetchAsyncShows(seriesText));
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing></MovieListing>
    </div>
  );
};

export default Home;
