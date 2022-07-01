const initialState = [];
const todo = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DEL":
      return state.filter((item, index) => {
        return action.payload !== index;
      });
    case "EDIT":
      return state;
    case "CALL":
      return action.payload;
    default:
      return state;
  }
};
export default todo;
