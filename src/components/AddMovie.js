import React, { useState } from "react";
import "./AddMovie.css";

const AddMovie = ({ onAddMovie }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 5.0,
    trailerURL: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (!formData.posterURL.trim()) {
      newErrors.posterURL = "Poster URL is required";
    } else if (!isValidURL(formData.posterURL)) {
      newErrors.posterURL = "Please enter a valid URL";
    }

    if (!formData.trailerURL.trim()) {
      newErrors.trailerURL = "Trailer embed URL is required";
    } else if (!isValidURL(formData.trailerURL)) {
      newErrors.trailerURL = "Please enter a valid URL";
    }

    if (formData.rating < 0 || formData.rating > 10) {
      newErrors.rating = "Rating must be between 0 and 10";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidURL = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onAddMovie(formData);
      setFormData({
        title: "",
        description: "",
        posterURL: "",
        rating: 5.0,
        trailerURL: "",
      });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <div className="add-movie-container">
      <h2>🎬 Add New Movie</h2>
      <form onSubmit={handleSubmit} className="add-movie-form">
        <div className="form-group">
          <label htmlFor="title">Movie Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter movie title..."
            className={errors.title ? "error" : ""}
          />
          {errors.title && (
            <span className="error-message">{errors.title}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter movie description..."
            rows="4"
            className={errors.description ? "error" : ""}
          />
          {errors.description && (
            <span className="error-message">{errors.description}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="posterURL">Poster URL *</label>
          <input
            type="url"
            id="posterURL"
            name="posterURL"
            value={formData.posterURL}
            onChange={handleChange}
            placeholder="https://example.com/poster.jpg"
            className={errors.posterURL ? "error" : ""}
          />
          {errors.posterURL && (
            <span className="error-message">{errors.posterURL}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="trailerURL">Trailer Embed URL *</label>
          <input
            type="url"
            id="trailerURL"
            name="trailerURL"
            value={formData.trailerURL}
            onChange={handleChange}
            placeholder="https://www.youtube.com/embed/..."
            className={errors.trailerURL ? "error" : ""}
          />
          {errors.trailerURL && (
            <span className="error-message">{errors.trailerURL}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating (0-10) *</label>
          <div className="rating-input-container">
            <input
              type="number"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              min="0"
              max="10"
              step="0.1"
              className={errors.rating ? "error" : ""}
            />
            <span className="rating-unit">/10</span>
          </div>
          {errors.rating && (
            <span className="error-message">{errors.rating}</span>
          )}
        </div>

        <div className="form-actions">
          <button type="submit" className="btn submit-btn">
            Add Movie
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
