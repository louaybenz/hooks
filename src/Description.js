import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './App.css'

const Description = (props) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {}, []);
  return (
    <div>
      <h1>Description</h1>
      <h5>
        {
          props.movieList.find((el) => el.id == props.match.params.id)
            .description
        }
      </h5>
          <h6 className='trailer1' >Trailer</h6><br/>
      <div className='trailer-title'>
      <iframe
        width="560"
        height="315"
        src={
            props.movieList.find((el) => el.id == props.match.params.id)
              .trailer
            }
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className='trailer'
            ></iframe>
    </div>

      <Link to="/">HOME</Link>
    </div>
  );
};

export default Description;
