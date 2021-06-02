export const createBookAction = (book) => ({
  type: 'CREATE_BOOK',
  payload: book,
});

export const deleteBookAction = (id) => ({
  type: 'REMOVE_BOOK',
  payload: id,
});

export const filterBook = (category) => ({
  type: 'CHANGE_FILTER',
  payload: category,
});
