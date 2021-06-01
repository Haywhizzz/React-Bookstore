import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

function BooksList({ books }) {
  return (
    <div>
      <table>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {books.map((book) => (
          <Book id={book.id} key={book.id} title={book.title} category={book.category} />
        ))}
      </table>
    </div>
  );
}

BooksList.propTypes = {
  books: PropTypes.objectOf(Array).isRequired,
};

const mapStateToProps = (state) => ({
  books: state.booksReducer,
});

export default connect(mapStateToProps)(BooksList);
