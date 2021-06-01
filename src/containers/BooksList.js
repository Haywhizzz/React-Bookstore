import Book from '../components/Book';

function BooksList() {
  return (
    <div>
      <table>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      <Book />
      </table>
    </div>
  );
}

export default BooksList;
