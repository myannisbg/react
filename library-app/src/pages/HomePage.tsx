import React, { useEffect, useState } from 'react';
import { getRecentChanges } from '../services/openLibrary';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [changes, setChanges] = useState<any[]>([]);

  useEffect(() => {
    getRecentChanges(10).then(setChanges);
  }, []);

  return (
    <div>
      <h1>Library</h1>
      <SearchBar />
      <h2>Recent Changes</h2>
      <ul>
        {changes.map((c) => (
          <li key={c.id}>
            <Link to={`/book${c.data?.key || c.data?.works?.key || ''}`}>{c.comment || c.data?.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
