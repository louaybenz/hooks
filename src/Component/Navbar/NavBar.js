import React, {useState} from "react";
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";
import Add from "./Add";
import {Link} from 'react-router-dom'
import ReactStars from "react-rating-stars-component";

function NavBar({
  setSearch,
  handleMovie,
  setsearchRating,
  setMovielist,
  movielist,
}) {
  // const [Search, setSearch] = useState("");

  // const [RatingSearch, setRatingSearch] = useState(1);

  // const ratingChanged = (newRating) => {
  //   setsearchRating(newRating);
  // };

  return (
    <Navbar style={{backgroundColor: 'rgb( 0,0,0)'}}>
      
      <Navbar.Brand href="#home" style={{color: "#007bff"}}>
        SHAHID
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Add
            handleMovie={handleMovie}
            setMovielist={setMovielist}
            movielist={movielist}
          />
        </Nav>
        <ReactStars
          count={5}
          onChange={(v) => setsearchRating(v)}
          size={24}
          activeColor="#ffd700"
        />

        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
