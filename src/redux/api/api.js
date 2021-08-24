import library from '../../api/library';

const RECEIVE_BOOKS = 'bookStore/books/RECEIVE_BOOKS';
const FILTER_REFRESH = 'bookStore/filter/FILTER_REFRESH';

export const receiveBooks = (books) => ({
  type: RECEIVE_BOOKS,
  books,
});

export const filterRefresh = (payload) => ({
  type: FILTER_REFRESH,
  payload,
});

export const getBooks = () => (dispatch) => {
  library.getBooks().then((books) => {
    dispatch(receiveBooks(books));
    dispatch(filterRefresh(books));
    return books;
  });
};

export const addBook = (book) => (dispatch) => {
  library.addBook(book).then((response) => {
    if (response === 'Created') {
      dispatch(getBooks());
    }
    return response;
  });
};

export const removeBook = (book) => (dispatch) => {
  library.removeBook(book).then((response) => {
    if (response === 'The book was deleted successfully!') {
      dispatch(getBooks());
    }
    return response;
  });
};
