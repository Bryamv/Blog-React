export const blogReducer = (state = [], action) => {
  switch (action.type) {
    case "publish":
      return [...state, action.payload];
    case "delete":
      return state.filter((blog) => blog.id !== action.payload);

    default:
      return state;
  }
};
