import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getWork, Work } from '../services/openLibrary';
import { fetchSummary, WikiSummary } from '../services/wikipedia';
import SearchBar from '../components/SearchBar';

const BookDetailPage: React.FC = () => {
  const { key } = useParams<{ key: string }>();
  const [work, setWork] = useState<Work | null>(null);
  const [wiki, setWiki] = useState<WikiSummary | null>(null);

  useEffect(() => {
    if (key) {
      getWork(`/${key}`).then(setWork);
    }
  }, [key]);

  useEffect(() => {
    if (work?.title) {
      fetchSummary(work.title).then(setWiki);
    }
  }, [work?.title]);

  if (!work) return <div>Loading...</div>;

  const coverUrl = work.covers?.length
    ? `https://covers.openlibrary.org/b/id/${work.covers[0]}-L.jpg`
    : undefined;

  return (
    <div>
      <SearchBar />
      <h2>{work.title}</h2>
      {coverUrl && <img src={coverUrl} alt={work.title} style={{ maxWidth: '200px' }} />}
      {typeof work.description === 'string' && <p>{work.description}</p>}
      {wiki?.extract && <p>{wiki.extract}</p>}
      {wiki?.thumbnail && <img src={wiki.thumbnail.source} alt="Wiki cover" />}
      {wiki?.content_urls?.desktop?.page && (
        <p>
          <a href={wiki.content_urls.desktop.page} target="_blank" rel="noopener noreferrer">
            Read more on Wikipedia
          </a>
        </p>
      )}
    </div>
  );
};

export default BookDetailPage;
