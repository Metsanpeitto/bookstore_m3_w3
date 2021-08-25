import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterBooks } from '../redux/filter/filter';

function Filter() {
  const dispatch = useDispatch();
  const { booksReducer } = useSelector((state) => state);
  const { books } = booksReducer;

  const filter = (e) => {
    const { value } = e.target;
    const data = { value, books };
    dispatch(filterBooks(data));
  };

  return (
    <select
      className="filter-category"
      placeholder="Category"
      onChange={filter}
      id="input-category"
      name="input-category"
    >
      <option value="-"> - </option>
      <option value="Science">Science Fiction</option>
      <option value="Economy">Economy</option>
      <option value="Action">Action</option>
    </select>
  );
}

export default Filter;
