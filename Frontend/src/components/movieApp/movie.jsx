import React from 'react'
import search_icon from '../assets/search.png';
import defaultImg from '../assets/default.png';

const movie = () => {
  const search = async () => {
    const search_text = document.getElementsByClassName("search_text")[0].value;
    console.log(search_text);

    const request = await fetch(`http://www.omdbapi.com/?apikey=5a96bbee&s=${search_text}`);
    const data = await request.json();

    let movies = data.Search.map(m => {
      return {
        title: m.title,
        description: `${m.Year}/${m.Type}`,
        imdbID: m.imdbID,
        poster: m.Poster === 'N/A' ? defaultImg : m.Poster,
        isFavourite: false
      }
    });

    prepareMovies(movies);
  }

  function prepareMovies(movies){
    document.querySelector(".movies").innerHTML = "";
    movies.forEach(movie => {
      let movie_card = document.createElement("movie-card"); // movie card adında components yap
      movie_card.setAttribute("title", movie.title);
      movie_card.setAttribute("poster", movie.poster);
      movie_card.setAttribute("description", movie.description);
      movie_card.setAttribute("isFavourite", movie.isFavourite);
      movie_card.setAttribute("imdbID", movie.imdbID);

      document.querySelector(".movies").append(movie_card);
    });
  }

  return (
    <>
      <div class="top-bar">
        <input type="text" class="search_text" placeholder='Search'></input>
        <div class="search-icon" onClick={() => {search()}}>
          <img src={search_icon} alt="searc icon"></img>
        </div>
      </div>

      <div class="movies"></div>
    </>
  )
}

export default movie