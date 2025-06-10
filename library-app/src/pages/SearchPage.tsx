import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchBooks, Book } from '../services/openLibrary';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';

const SearchPage: React.FC = () => {
  const [params] = useSearchParams();
  const [books, setBooks] = useState<Book[]>([]);
  const query = params.get('q') || '';

  useEffect(() => {
    if (query) {
      searchBooks(query).then(setBooks);
    }
  }, [query]);

  return (
    <div>
      <SearchBar />
      <h2>Results for "{query}"</h2>
      <BookList books={books} />
    </div>
  );
};

export default SearchPage;
