import React from 'react';

function BooksForm() {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form action="">
      <label htmlFor="title">
        Title
        <input type="text" id="title" name="title" />
      </label>
      <select name="category" id="category">
        <option value="" disabled>
          Select Book
        </option>
        {categories.map((category) => (
          <option value={category} key={categories.indexOf(category)}>
            {category}
          </option>
        ))}
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BooksForm;
