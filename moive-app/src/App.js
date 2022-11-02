import "./App.scss";

import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import MovieDetail from "./components/MoiveDetail/MovieDetail";
import Footer from "./components/footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/movie/:imdbID" element={<MovieDetail></MovieDetail>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
