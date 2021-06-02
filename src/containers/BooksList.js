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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h1 className="navbar-brand text-primary mx-5 font-weight-bold">Bookstore CMS</h1>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <p className="nav-link pt-3 text-mute">BOOKS</p>
            </li>
            <li className="nav-item">
              <p className="nav-link pt-3 text-muted">CATEGORIES</p>
            </li>
            <li className="nav-item dropdown">
              <p className="nav-link pt-3" id="navbarDropdownMenuLink" aria-expanded="false">
                <CategoryFilter onSelect={handleSelect} />
              </p>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        {filteredBooks().map((book) => (
          <Book
            id={book.id}
            key={book.id}
            title={book.title}
            category={book.category}
            deleteBook={handleDelete}
          />
        ))}
      </div>
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
