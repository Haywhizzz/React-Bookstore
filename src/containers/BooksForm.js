import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBookAction } from '../actions';

export const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const BooksForm = ({ createBook }) => {
  const [formData, setFormData] = useState({
    id: Math.floor(Math.random() * 1000),
    title: '',
    category: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(formData);
    setFormData({
      id: Math.floor(Math.random() * 1000),
      title: '',
      category: '',
    });
  };

  return (
    <div className="addbook">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">
            Title
            <input className="form-control w-100" onChange={(e) => setFormData({ ...formData, title: e.target.value })} value={formData.title} type="text" id="title" name="title" />
          </label>
        </div>
        <select className="form-control" onChange={(e) => setFormData({ ...formData, category: e.target.value })} value={formData.category} name="category" id="category">
          <option value="" disabled>
            Category
          </option>
          {categories.map((category) => (
            <option value={category} key={categories.indexOf(category)}>
              {category}
            </option>
          ))}
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  const createBook = (book) => dispatch(createBookAction(book));

  return { createBook };
};
export default connect(null, mapDispatchToProps)(BooksForm);
