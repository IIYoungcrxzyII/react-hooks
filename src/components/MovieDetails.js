import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./MovieDetails.css";

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return (
      <div className="movie-details-container">
        <h2>Movie not found</h2>
        <button className="btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="movie-details-container">
      <button className="btn back-btn" onClick={() => navigate("/")}>
        ← Back to Home
      </button>
      <div className="movie-details-content">
        <div className="movie-details-poster">
          <img src={movie.posterURL} alt={movie.title} />
        </div>
        <div className="movie-details-info">
          <h2 className="movie-details-title">{movie.title}</h2>
          <p className="movie-details-description">{movie.description}</p>
          <div className="movie-details-rating">
            <span className="rating-number">{movie.rating}</span>
            <span className="rating-label">/10</span>
          </div>
          <div className="movie-details-trailer">
            <h3>Watch Trailer</h3>
            <div className="trailer-embed-wrapper">
              <iframe
                width="100%"
                height="315"
                src={movie.trailerURL}
                title={movie.title + " Trailer"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
