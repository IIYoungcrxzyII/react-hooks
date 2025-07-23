import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      rating: 8.8,
      trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      id: 2,
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      rating: 9.3,
      trailerURL: "https://www.youtube.com/embed/6hB3S9bIaco",
    },
    {
      id: 3,
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      rating: 9.0,
      trailerURL: "https://www.youtube.com/embed/EXeTwQWrcwY",
    },
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);
  const [showAddForm, setShowAddForm] = useState(false);

  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: Date.now() }]);
    setShowAddForm(false);
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title
      .toLowerCase()
      .includes(filterTitle.toLowerCase());
    const matchesRating = movie.rating >= filterRating;
    return matchesTitle && matchesRating;
  });

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <header className="app-header">
                    <h1>🎬 My Movie Collection</h1>
                    <p>Discover and manage your favorite movies and TV shows</p>
                  </header>
                  <div className="controls">
                    <button
                      className="btn add-btn"
                      onClick={() => setShowAddForm(!showAddForm)}
                    >
                      {showAddForm ? "Cancel" : "Add New Movie"}
                    </button>
                  </div>
                  {showAddForm && <AddMovie onAddMovie={addMovie} />}
                  <Filter
                    filterTitle={filterTitle}
                    setFilterTitle={setFilterTitle}
                    filterRating={filterRating}
                    setFilterRating={setFilterRating}
                  />
                  <MovieList movies={filteredMovies} />
                </>
              }
            />
            <Route
              path="/movie/:id"
              element={<MovieDetails movies={movies} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
