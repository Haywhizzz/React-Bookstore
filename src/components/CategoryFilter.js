import PropTypes from 'prop-types';
import { categories } from '../containers/BooksForm';

const CategoryFilter = ({ onSelect }) => (
  <div>
    <select name="category" onChange={({ target }) => onSelect(target.value)}>
      {['All', ...categories].map((category) => (
        <option
          value={category}
          key={category}
        >
          {category}
        </option>
      ))}
    </select>
  </div>
);

CategoryFilter.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default CategoryFilter;
