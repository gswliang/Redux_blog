import _ from "lodash";
import jsonplaceholder from "../api/jsonPlaceholder";

// return a function to thunk (middleware)
export const fetchPost = () => async (dispatch) => {
  const res = await jsonplaceholder.get("/posts");
  //redux-thunk
  dispatch({ type: "FETCH_POSTS", payload: res.data });
};

//pass id & dispatch to _memFetchUser to prevent fetching same data
export const fetchUser = (id) => (dispatch) => __memFetchUser(id, dispatch);

const __memFetchUser = _.memoize(async (id, dispatch) => {
  const res = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: res.data });
});
