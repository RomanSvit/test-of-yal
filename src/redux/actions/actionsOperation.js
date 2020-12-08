import {
  usersFetchDataSuccess,
  usersFetchDataError,
  usersFetchDataRequest,
} from "./actions";
const axios = require("axios");

export const usersfetchData = (url) => {
  return (dispatch) => {
    dispatch(usersFetchDataRequest());
    axios
      .get(url)
      .then((res) => {
        dispatch(usersFetchDataSuccess(res.data));
      })
      .catch((error) => dispatch(usersFetchDataError(error)));
  };
};
