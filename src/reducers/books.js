const currentState = [
  {
    id: 1,
    title: 'The Hobbit',
    category: 'Sci-fi',
  },
  {
    id: 2,
    title: 'Star Wars',
    category: 'Sci-fi',
  },
];

const booksReducer = (state = currentState, action) => {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.payload];
    case 'DELETE':
      return [...state.filter((book) => book.id !== action.payload)];
    default:
      return state;
  }
};

export default booksReducer;
