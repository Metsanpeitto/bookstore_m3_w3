import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/api/api';

function Adder() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Science');

  const submitBookToStore = () => {
    const newBook = {
      item_id: uuidv4(),
      title,
      category,
      author,
    };

    dispatch(addBook(newBook));
  };

  return (
    <div className="adder">
      <h2 className="adder-header">ADD NEW BOOK</h2>
      <div className="add-form">
        <input
          className="adder-title input"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="input-title"
          id="input-title"
        />
        <input
          className="adder-author input"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          name="input-author"
          id="input-author"
        />
        <select
          className="adder-category input"
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
          id="input-category"
          name="input-category"
        >
          <option value="Science">Science Fiction</option>
          <option value="Economy">Economy</option>
          <option value="Action">Action</option>
        </select>
        <button className="btn-1" type="submit" onClick={submitBookToStore}>
          ADD BOOK
        </button>
      </div>
    </div>
  );
}

export default Adder;
