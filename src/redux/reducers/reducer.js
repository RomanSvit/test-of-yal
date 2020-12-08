import { Type } from "../actions/actions";

const initialState = {
  users: [],
  listBirthday: [],
  loading: false,
  error: null,
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Type.USERS_FETCH_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case Type.USERS_FETCH_DATA_SUCCES:
      let newList = [];
      let newArr = localStorage.getItem("listB");
      if (newArr !== undefined && newArr !== null) {
        newList = JSON.parse(newArr);
      }
      const users = payload.users.map((elem) => {
        let flag = !!newList.find((el) => el.id === elem.id);
        return { ...elem, selected: flag };
      });
      return {
        ...state,
        users: users,
        loading: false,
        error: null,
        listBirthday: newList,
      };
    case Type.USERS_FETCH_DATA_ERROR:
      return { ...state, loading: false, error: payload.error };

    case Type.CHANGE_SELECTED:
      const { checked, id } = payload.item;
      let newListBirthday;
      let newUsers = [...state.users];
      newUsers.find((elem) =>
        elem.id === id ? (elem.selected = checked) : false
      );
      newListBirthday = newUsers.filter((elem) => elem.selected === true);
      localStorage.setItem("listB", JSON.stringify(newListBirthday));
      return { ...state, users: newUsers, listBirthday: [...newListBirthday] };
    default:
      return state;
  }
};
