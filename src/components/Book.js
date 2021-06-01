import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteBookAction } from '../actions/index';

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

const mapDispatchToProps = (dispatch) => {
  const deleteBook = (id) => dispatch(deleteBookAction(id));

  return { deleteBook };
};

export default connect(null, mapDispatchToProps)(Book);
