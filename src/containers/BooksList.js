import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { deleteBookAction, filterBook } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

function BooksList({
  books, deleteBookAction, filterBook, filterCategory,
}) {
  const handleDelete = (id) => {
    deleteBookAction(id);
  };
  const handleSelect = (category) => {
    filterBook(category);
  };
  const filteredBooks = () => {
    if (filterCategory !== 'All') {
      return books.filter((book) => book.category.toLowerCase() === filterCategory.toLowerCase());
    }
    return books;
  };
  return (
    <div>
      <table>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {filteredBooks().map((book) => (
          <Book
            id={book.id}
            key={book.id}
            title={book.title}
            category={book.category}
            deleteBook={handleDelete}
          />
        ))}
      </table>
      <CategoryFilter onSelect={handleSelect} />
    </div>
  );
}

BooksList.propTypes = {
  books: PropTypes.objectOf(Array).isRequired,
  deleteBookAction: PropTypes.func.isRequired,
  filterBook: PropTypes.func.isRequired,
  filterCategory: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.booksReducer,
  filterCategory: state.filterReducer,
});

export default connect(mapStateToProps, { deleteBookAction, filterBook })(BooksList);
