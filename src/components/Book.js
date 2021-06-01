import React from 'react';
import PropTypes from 'prop-types';

function Book({
  id, title, category, deleteBook,
}) {
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td><button onClick={() => deleteBook(id)} type="button">Delete</button></td>
    </tr>
  );
}

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default Book;
