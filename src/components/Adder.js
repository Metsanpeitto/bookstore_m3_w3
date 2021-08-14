import React from 'react';

const Adder = () => (
  <div className="adder">
    <h2>ADD NEW BOOK</h2>
    <div className="add-form">
      <input type="text" name="input-title" id="input-title" />
      <select id="input-category" name="input-category">
        <option value="science-fiction">Science Fiction</option>
        <option value="economy">Economy</option>
        <option value="action">Action</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </div>
  </div>
);

export default Adder;
