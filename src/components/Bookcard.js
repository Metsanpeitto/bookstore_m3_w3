import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/api/api';

function Bookcard(props) {
  const dispatch = useDispatch();
  const data = props;
  const { title } = data.data;
  const { author } = data.data;
  const { category } = data.data;
  const id = data.data.item_id;

  const remove = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="bookcard" id={id}>
      <div className="bookcard-left">
        <h4 className="bookcard_genre">{category}</h4>
        <h3 className="title">{title}</h3>
        <h6 className="author">{author}</h6>
        <div className="actions">
          <button type="button" className="btn-2">
            Comments
          </button>
          <div className="vertical-line" />
          <button type="button" className="btn-2" onClick={() => remove()}>
            Remove
          </button>
          <div className="vertical-line" />
          <button type="button" className="btn-2">
            Edit
          </button>
        </div>
      </div>
      <div className="bookcard-center">
        <div src="./" alt="progress" className="progress" />
        <div className="data">
          <h3 className="progress-number">64%</h3>
          <h6 className="progress-state">Completed</h6>
        </div>
      </div>
      <div className="bookcard-right">
        <div className="chapter">
          <h3 className="chapter-label">CURRENT CHAPTER</h3>
          <h6 className="chapter-chapter">Chapter 3: A Lesson Learned</h6>
          <button type="button" className="btn-1">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bookcard;
