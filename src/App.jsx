import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MovieList from "./components/MovieList";
import "./App.css";

// Landing Page Component
const LandingPage = () => {
  return (
    // We added the "landing-container" class here to center this specific page
    <div className="landing-container">
      <h1 className="title">Discover Movies Instantly!</h1>
      <p className="tagline">Your gateway to the cinematic universe.</p>
      
      <Link to="/movies">
        <button className="watch-btn">Watch More</button>
      </Link>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movies" element={<MovieList />} />
      </Routes>
    </Router>
  );
}