import React, { useEffect, useState } from 'react';
import { getSubjectBooks, Book } from '../services/openLibrary';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';

const HomePage: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getSubjectBooks('fantasy', 8).then(setBooks);
  }, []);

  return (
    <div className="home-page">
      <h1>Library</h1>
      <SearchBar />
      <h2>Featured Books</h2>
      <BookList books={books} />
    </div>
  );
};

export default HomePage;
