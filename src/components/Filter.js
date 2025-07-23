import React from "react";
import "./Filter.css";

const Filter = ({
  filterTitle,
  setFilterTitle,
  filterRating,
  setFilterRating,
}) => {
  return (
    <div className="filter-container">
      <div className="filter-section">
        <div className="form-group">
          <label htmlFor="title-filter">🔍 Search by Title</label>
          <input
            type="text"
            id="title-filter"
            value={filterTitle}
            onChange={(e) => setFilterTitle(e.target.value)}
            placeholder="Enter movie title..."
          />
        </div>
      </div>

      <div className="filter-section">
        <div className="form-group">
          <label htmlFor="rating-filter">⭐ Minimum Rating</label>
          <div className="rating-slider-container">
            <input
              type="range"
              id="rating-filter"
              min="0"
              max="10"
              step="0.1"
              value={filterRating}
              onChange={(e) => setFilterRating(parseFloat(e.target.value))}
              className="rating-slider"
            />
            <div className="rating-display">
              <span className="rating-value">{filterRating}</span>
              <span className="rating-max">/10</span>
            </div>
          </div>
        </div>
      </div>

      {(filterTitle || filterRating > 0) && (
        <div className="filter-summary">
          <span className="filter-label">Active filters:</span>
          {filterTitle && (
            <span className="filter-tag">Title: "{filterTitle}"</span>
          )}
          {filterRating > 0 && (
            <span className="filter-tag">Rating: {filterRating}+</span>
          )}
          <button
            className="clear-filters-btn"
            onClick={() => {
              setFilterTitle("");
              setFilterRating(0);
            }}
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
};

export default Filter;
