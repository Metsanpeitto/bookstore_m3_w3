import React from 'react';

const Bookcard = () => (
  <div className="bookcard">
    <div className="bookcard-left">
      <h4 className="bookcard_genre">Action</h4>
      <h3 className="title">The Hunger Games</h3>
      <h6 className="author">Suzanne Collins</h6>
      <div className="actions">
        <button type="button" className="btn-1">
          Comments
        </button>
        <button type="button" className="btn-1">
          Remove
        </button>
        <button type="button" className="btn-1">
          Edit
        </button>
      </div>
    </div>
    <div className="bookcard-center">
      <img src="./" alt="progress" className="progress" />
      <div className="data">
        <h3>64%</h3>
        <h6>Completed</h6>
      </div>
    </div>
  </div>
);

export default Bookcard;
