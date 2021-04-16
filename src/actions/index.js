import { chain } from "lodash";
import jsonplaceholder from "../api/jsonPlaceholder";

export const fetchPostAndUser = () => async (dispatch, getState) => {
  //an await keyword is to wait the data came back from one api
  await dispatch(fetchPost());
  //getState().post will be return the array with all the data that requested from api!
  //uniq- find the unique num, map - iterate every one in an array with key="userId"
  // const userId = uniq(map(getState().post, "userId"));
  //no need to wait its result to use again, so we leave "await" this time
  // userId.forEach((id) => dispatch(fetchUser(id)));

  //chain from lodash allow to chain on different functions
  chain(getState().post)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value(); // value() means to start executing chain.
};

// return a function to thunk (middleware)
const fetchPost = () => async (dispatch) => {
  const res = await jsonplaceholder.get("/posts");
  //redux-thunk
  dispatch({ type: "FETCH_POSTS", payload: res.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const res = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: res.data });
};

//Lodash memoize (every request only ran once)
//pass id & dispatch to _memFetchUser to prevent fetching repeated data
// export const fetchUser = (id) => (dispatch) => __memFetchUser(id, dispatch);

// const __memFetchUser = memoize(async (id, dispatch) => {
//   const res = await jsonplaceholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: res.data });
// });
