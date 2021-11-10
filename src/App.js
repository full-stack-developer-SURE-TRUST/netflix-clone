import React from 'react';
import './App.css';
import Row from './Row';
import request from './request';


function App() {
  return (
    <div className=" APP">
    <Row title = "NETFLIX ORIGINAL" fetchUrl={request.fetchNetflixOriginal} />
    <Row title= "Trending Now" fetchUrl={request.fetchTrending}/>
    <Row title= "TopRated Movies" fetchUrl={request.fetchTrending}/>
    <Row title= "Action Movies" fetchUrl={request.fetchTrending}/>
    <Row title= "Comedy Movies" fetchUrl={request.fetchTrending}/>
    <Row title= "Horror Movies" fetchUrl={request.fetchTrending}/>


    </div>
    
  );
}

export default App;
