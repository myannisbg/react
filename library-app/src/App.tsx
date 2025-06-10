import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import AdvancedSearchPage from './pages/AdvancedSearchPage';
import BookDetailPage from './pages/BookDetailPage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/advanced" element={<AdvancedSearchPage />} />
        <Route path="/book/:key" element={<BookDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
