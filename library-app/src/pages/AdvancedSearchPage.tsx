import React, { useState } from 'react';
import { AdvancedParams, searchAdvanced, Book } from '../services/openLibrary';
import BookList from '../components/BookList';
import SearchBar from '../components/SearchBar';

const AdvancedSearchPage: React.FC = () => {
  const [params, setParams] = useState<AdvancedParams>({});
  const [books, setBooks] = useState<Book[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  const search = async (e: React.FormEvent) => {
    e.preventDefault();
    const results = await searchAdvanced(params);
    setBooks(results);
  };

  return (
    <div>
      <SearchBar />
      <h2>Advanced Search</h2>
      <form onSubmit={search} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <input name="title" placeholder="Title" onChange={handleChange} />
        <input name="author" placeholder="Author" onChange={handleChange} />
        <input name="subject" placeholder="Subject" onChange={handleChange} />
        <input name="year" placeholder="First publish year" onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <BookList books={books} />
    </div>
  );
};

export default AdvancedSearchPage;
