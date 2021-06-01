import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { deleteBookAction } from '../actions/index';

function BooksList({ books, deleteBookAction }) {
  const handleDelete = (id) => {
    deleteBookAction(id);
  };
  return (
    <div>
      <table>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {books.map((book) => (
          <Book
            id={book.id}
            key={book.id}
            title={book.title}
            category={book.category}
            deleteBook={handleDelete}
          />
        ))}
      </table>
    </div>
  );
}

BooksList.propTypes = {
  books: PropTypes.objectOf(Array).isRequired,
  deleteBookAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.booksReducer,
});

export default connect(mapStateToProps, { deleteBookAction })(BooksList);
