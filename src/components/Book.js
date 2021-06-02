import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Book({
  id, title, category, deleteBook,
}) {
  const percentage = 66;
  return (
    <div className="books d-flex justify-content-between p-3 m-5">
      <div className="m-5 pr-5">
        <h6 className="text-muted">{category}</h6>
        <h4 className="">{title}</h4>
        <div>
          <button className="options" type="button">Comments</button>
          |
          <button onClick={() => deleteBook(id)} className="options" type="button">Remove</button>
          |
          <button className="options" type="button">Edit</button>
        </div>

      </div>
      <div className="d-flex justify-content-end">
        <div className="percent w-50">
          <div className="mr-4">
            <CircularProgressbar value={percentage} />
          </div>
          <div>
            <h1>
              66%
            </h1>
            <p className="text-muted">
              Completed
            </p>
          </div>
        </div>
        <div className="p-3">
          <p>CURRENT CHAPTER</p>
          <p>Chapter 17</p>
          <button className="btn btn-primary px-3" type="button">Update Progress</button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default Book;
