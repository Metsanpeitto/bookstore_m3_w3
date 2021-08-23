const FILTER_BOOKS = 'bookStore/filter/FILTER_BOOKS';

const initialState = { booksFiltered: null };

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
      };
    }
    default:
      return state;
  }
};

export default reducer;
