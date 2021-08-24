const FILTER_BOOKS = 'bookStore/filter/FILTER_BOOKS';
const FILTER_REFRESH = 'bookStore/filter/FILTER_REFRESH';

const initialState = { booksFiltered: null, value: '-' };

export const filterBooks = (payload) => ({
  type: FILTER_BOOKS,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BOOKS: {
      const { value, books } = action.payload;
      let newCollection = [];
      if (books.length > 0) {
        if (value === '-') {
          newCollection = null;
        } else {
          books.forEach((b) => {
            if (b.category === value) {
              newCollection.push(b);
            }
          });
        }
      }
      return {
        booksFiltered: newCollection,
        value,
      };
    }
    case FILTER_REFRESH: {
      const { books } = action.payload;
      const { value } = state;
      let newCollection = books;
      if (books) {
        if (books.length > 0) {
          if (value !== '-') {
            newCollection = [];
            books.forEach((b) => {
              if (b.category === value) {
                newCollection.push(b);
              }
            });
          }
        }
      }

      return {
        booksFiltered: newCollection,
        value,
      };
    }
    default:
      return state;
  }
};

export default reducer;
