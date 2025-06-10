import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../services/openLibrary';

interface Props {
  book: Book;
}

const BookItem: React.FC<Props> = ({ book }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : undefined;
  return (
    <div style={{ border: '1px solid #ccc', padding: '0.5rem', margin: '0.5rem' }}>
      {coverUrl && <img src={coverUrl} alt={book.title} style={{ width: 80 }} />}
      <div>
        <Link to={`/book${book.key}`}>{book.title}</Link>
        {book.author_name && <div>by {book.author_name.join(', ')}</div>}
        {book.first_publish_year && <div>First published: {book.first_publish_year}</div>}
      </div>
    </div>
  );
};

export default BookItem;
