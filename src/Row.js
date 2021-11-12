import React, { useState } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import "./Row.css";
import movieTrailer from "./movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const[Movies , setMovies] = useState([]);
  const[trailerUrl, setTrailerUrl] = useState("");




  // A snippet of code which runs based on a specific condition
  useState(() => {
    // if [], run once when the row loads , and dont run agian
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request.data.requests);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

//   console.table(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        { Movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* container -> poster */}
    </div>
  );
}
export default Row;