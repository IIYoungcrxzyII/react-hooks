import React from "react";
import "./MovieCard.css";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { id, title, description, posterURL, rating } = movie;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <div
      className="movie-card clickable"
      onClick={handleClick}
      tabIndex={0}
      role="button"
      aria-pressed="false"
    >
      <div className="movie-poster">
        <img src={posterURL} alt={title} />
        <div className="movie-rating">
          <span className="rating-number">{rating}</span>
          <span className="rating-label">/10</span>
        </div>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-description">{description}</p>
        <div className="movie-stars">
          {[...Array(10)].map((_, index) => (
            <span
              key={index}
              className={`star ${
                index < Math.floor(rating) ? "filled" : "empty"
              }`}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
