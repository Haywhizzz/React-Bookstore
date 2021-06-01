const Books = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return state.push(action.payload);
    case 'DELETE':
      return state.splice(state.indexof(action.payload), 1);
    default:
      return state;
  }
};

export default Books;
