const movie = (state = {}, action) => {
  switch (action.type) {
    case 'BBBB':
      return { reducers: action.payload };
    default:
      return state;
  }
};

export default movie;
