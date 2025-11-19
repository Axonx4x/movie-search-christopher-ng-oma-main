import React from 'react';

// Receiving the "movie" object as a prop
const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card" style={styles.card}>
      {/* Display Poster */}
      <img 
        src={movie.poster_path} 
        alt={movie.title} 
        style={styles.image} 
      />
      
      <div style={styles.content}>
        {/* Display Title */}
        <h3 style={styles.title}>{movie.title}</h3>
        
        {/* Display Release Date & Popularity */}
        <p style={styles.meta}>
          <span>\U0001f4c5 {movie.release_date}</span>
          <span>\U0001f525 {movie.popularity}</span>
        </p>

        {/* Display Shortened Overview */}
        <p style={styles.overview}>
          {movie.overview}
        </p>
      </div>
    </div>
  );
};

// Simple inline styles for the card (You can move this to CSS file if you prefer)
const styles = {
  card: {
    backgroundColor: '#1e293b',
    borderRadius: '12px',
    overflow: 'hidden',
    width: '280px',
    margin: '15px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
    textAlign: 'left',
  },
  image: {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
  },
  content: {
    padding: '15px',
  },
  title: {
    color: '#fff',
    fontSize: '1.2rem',
    margin: '0 0 10px 0',
  },
  meta: {
    color: '#94a3b8',
    fontSize: '0.9rem',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  overview: {
    color: '#cbd5e1',
    fontSize: '0.9rem',
    lineHeight: '1.4',
  }
};

export default MovieCard;