import React from 'react';
import Adder from '../components/Adder';
import Displayer from '../components/Displayer';

const Books = () => (
  <div className="books">
    <Displayer />
    <Adder />
  </div>
);
export default Books;
