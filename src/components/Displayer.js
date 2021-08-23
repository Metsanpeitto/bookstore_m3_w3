import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Bookcard from './Bookcard';

function Displayer() {
  const { booksReducer, filterReducer } = useSelector((state) => state);
  const { books } = booksReducer;
  const { booksFiltered } = filterReducer;
  const [booksDisplay, setBooksDisplay] = useState(null);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    if (booksFiltered) {
      if (booksFiltered !== booksDisplay) {
        setBooksDisplay(booksFiltered);
      }
    } else if (books !== booksDisplay) {
      setBooksDisplay(books);
    }
  });

  if (booksDisplay) {
    return (
      <div className="books-displayer">
        {booksDisplay.length > 0
          ? booksDisplay.map((b) => <Bookcard key={b.title} data={b} />)
          : null}
      </div>
    );
  }
  return <h3>Empty collection</h3>;
}

export default Displayer;
