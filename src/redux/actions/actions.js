export const Type = {
  USERS_FETCH_DATA_REQUEST: "USERS_FETCH_DATA_REQUEST",
  USERS_FETCH_DATA_SUCCES: "USERS_FETCH_DATA_SUCCES",
  USERS_FETCH_DATA_ERROR: "USERS_FETCH_DATA_ERROR",
  CHANGE_SELECTED:"CHANGE_SELECTED",
  
};

export const changeSelected = (e) => ({
  type: Type.CHANGE_SELECTED,
  payload: { item: e.target },
});

export const usersFetchDataRequest = () => ({
  type: Type.USERS_FETCH_DATA_REQUEST,
});
export const usersFetchDataSuccess = (res) => ({
  type: Type.USERS_FETCH_DATA_SUCCES,
  payload: { users: res },
});
export const usersFetchDataError = (error) => ({
  type: Type.USERS_FETCH_DATA_ERROR,
  payload: { error },
});
