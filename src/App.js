import "./App.css";
import Nav from "./Component/Navbar/NavBar";
import MovieList from "./Component/Movielist/MovieList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./Home";
import Description from './Description'
function App({setMovielist,movielist}) {
 
  const [searchRating, setsearchRating] = useState(0);
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState({});
  // const handlesearch = (val) => {
  //   setSearch(val);
  // };

  const handleMovie = (x) => {
    setMovie(x);
  };
  return (
    <div>
    <Nav
      setsearchRating={setsearchRating}
      setSearch={setSearch}
      handleMovie={handleMovie}
      setMovielist={setMovielist}
      movielist={movielist}
    />
    <MovieList
      searchRating={searchRating}
      movielist={movielist}
      movie={movie}
      search={search}
      searchRating={searchRating}
    />
  </div>
   
      
     
    )
}

export default App;
