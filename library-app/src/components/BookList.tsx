import React from 'react';
import BookItem from './BookItem';
import { Book } from '../services/openLibrary';

interface Props {
  books: Book[];
}

const BookList: React.FC<Props> = ({ books }) => {
  return (
    <div>
      {books.map((b) => (
        <BookItem key={b.key} book={b} />
      ))}
    </div>
  );
};

export default BookList;
