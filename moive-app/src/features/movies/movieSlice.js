import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import movieApi from "../../common/api/movieApi";
import { APIKey } from "../../common/api/MovieApiKey";

// geting moives list
export const fetchAsyncMovies = createAsyncThunk(`movies/fetchAsyncMovies`, async (term) => {
  // const movieText = "Harry";

  const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`);

  return response.data;
});

// getting shows list
export const fetchAsyncShows = createAsyncThunk(`movies/fetchAsyncShows`, async (term) => {
  // const seriesText = "breaking";

  const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`);

  return response.data;
});

// getting single movie details
export const fetchAsyncMovieOrShowDetail = createAsyncThunk(`movies/fetchAsyncMovieOrShowDetail`, async (id) => {
  const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);

  return response.data;
});

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
  loading: false,
};

const moiveSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: (state) => {
      console.log("Status-Pending");
      return { ...state, loading: true };
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Status-Fetched Successfully:");
      return { ...state, movies: payload,loading:false };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected:");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Status-Fetched Successfully:");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("Status-Fetched Successfully:");
      return { ...state, selectedMovieOrShow: payload };
    },
  },
});

export const { removeSelectedMovieOrShow } = moiveSlice.actions;

export const getAllMovies = (state) => state.movies.movies;

export const getAllShows = (state) => state.movies.shows;

export const getSelectedMoiveOrShow = (state) => state.movies.selectedMovieOrShow;

export const loader = (state) => state.movies.loading;

export default moiveSlice.reducer;
