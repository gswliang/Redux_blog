import jsonplaceholder from "../api/jsonPlaceholder";

// return a function to thunk (middleware)
export const fetchPost = () => async (dispatch) => {
  const res = await jsonplaceholder.get("/posts");
  //redux-thunk
  dispatch({ type: "FETCH_POSTS", payload: res.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const res = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: res.data });
};