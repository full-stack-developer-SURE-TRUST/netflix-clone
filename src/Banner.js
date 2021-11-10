import React, { useState } from "react";
import axios from "axios";
import request from "request";

function Banner(){
    const [movie , setmovie] = useState([]);
    useState(()=> {
        async function fetchData(){
        const request = await axios.get(request.fetchNetflixOriginals);
        setmovie(
            // get a random movies from list
            request.data.requests[
                Math.floor(Math.random()* request.data.requests.length -1)
            ]
        );
        return request;
        }
        fetchData();
    },  []);
    function truncate(str ,n){
        return str?.length > n ? str.substr(0, n - 1 )+"...." : str;
    }

    return(
        <header className="banner" style={{ backgroundSize: "cover", backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, backgroundPosition: "center centre",}} >

            <div className="banner__contents">
                <h1 className="banner__contents">
                    {movie?.title || movie?.name || movie?.original_name }
                </h1>

                <div className="banner__buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>

                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className="banner__fadeBootm" />
        </header>
        
    )
}

export default Banner;