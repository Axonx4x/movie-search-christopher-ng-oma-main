import React from 'react';
import { Link } from 'react-router-dom';
import { moviesData } from '../data/moviesData';
import MovieCard from './MovieCard';

const MovieList = () => {
  return (
    <div style={styles.pageContainer}>
      
      {/* Header Section */}
      <header style={styles.header}>
        <Link to="/" style={styles.backLink}>&larr; Back to Home</Link>
        <h1 style={styles.heading}>Trending Now</h1>
        <p style={styles.subHeading}>Top picks for you based on recent popularity</p>
      </header>

      {/* Grid Section */}
      <div style={styles.grid}>
        {moviesData.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      
    </div>
  );
};

const styles = {
  pageContainer: {
    // This matches the Landing Page background exactly
    background: 'radial-gradient(circle at top left, #020617 0%, #0a0f2b 80%)',
    minHeight: '100vh',
    padding: '40px 20px',
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: '"Orbitron", sans-serif',
  },
  header: {
    maxWidth: '1200px',
    margin: '0 auto 50px auto',
    textAlign: 'center',
  },
  backLink: {
    display: 'inline-block',
    color: '#94a3b8',
    textDecoration: 'none',
    marginBottom: '20px',
    fontSize: '0.9rem',
    transition: 'color 0.3s',
    cursor: 'pointer'
  },
  heading: {
    fontSize: '2.5rem',
    color: '#00d8ff',
    textShadow: '0 0 15px rgba(0, 216, 255, 0.5)',
    margin: '0 0 10px 0',
  },
  subHeading: {
    color: '#cbd5e1',
    fontSize: '1.1rem',
    fontWeight: '300',
  },
  grid: {
    display: 'grid',
    // Auto-fit creates a responsive grid that adjusts columns automatically
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
    gap: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
    justifyItems: 'center',
  }
};

export default MovieList;