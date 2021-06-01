export const createBookAction = (book) => ({
  type: 'CREATE',
  payload: book,
});

export const deleteBookAction = (id) => ({
  type: 'DELETE',
  payload: id,
});
