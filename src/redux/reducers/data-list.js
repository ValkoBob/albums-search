import { FETCH_DATA_REQUESTED, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "../constants/action-types";

const dataList = (state, action) => {

  if (state === undefined) {
    return {
      data: [],
      loading: true,
      error: null
    };
  }

  switch (action.type) {
    case FETCH_DATA_REQUESTED:
      return {
        data: [],
        loading: true,
        error: null
      };

    case FETCH_DATA_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: null
      };

    case FETCH_DATA_FAILURE:
      return {
        data: [],
        loading: false,
        error: action.payload
      };

    default:
      return state.dataList;
  }
};

export default dataList;
