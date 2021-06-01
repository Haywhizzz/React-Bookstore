export const createBookAction = (book) => ({
  type: 'CREATE',
  payload: book,
});

export const deleteBookAction = (book) => ({
  type: 'DELETE',
  payload: book,
});
