import React from 'react';
// We don't need to import App.css here explicitly if it's imported in main.jsx or App.jsx, 
// but it's good practice to ensure styles are available.

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      
      {/* Image Section with Floating Rating Badge */}
      <div className="card-image-container">
        <img 
          src={movie.poster_path} 
          alt={movie.title} 
          className="card-img" 
        />
        <div className="rating-badge">
          ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
        </div>
      </div>
      
      {/* Content Section */}
      <div className="card-content">
        <h3 className="card-title">{movie.title}</h3>
        
        <div className="card-meta">
          {/* Year Badge (Extracts just the year from 2025-08-10) */}
          <span className="year-badge">
            📅 {movie.release_date ? movie.release_date.split('-')[0] : "N/A"}
          </span>
          
          {/* Language */}
          <span className="lang-text">
            {movie.original_language ? movie.original_language.toUpperCase() : "EN"}
          </span>
        </div>

        {/* Overview (Truncated) */}
        <p className="card-desc">
          {movie.overview}
        </p>
        
        {/* The New Button */}
        <button className="details-btn">View Details</button>
      </div>
    </div>
  );
};

export default MovieCard;
