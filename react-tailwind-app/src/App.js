import React from "react";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Hero></Hero>
      <Analytics />
      <NewsLetter></NewsLetter>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
}

export default App;
