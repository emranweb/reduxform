const fetchUserReducer = (state = [], action) => {
  if (action.type === "fetch_user") {
    return action.payload;
  }

  return state;
};
