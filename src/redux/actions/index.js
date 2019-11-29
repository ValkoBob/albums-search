import { FETCH_DATA_REQUESTED, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "../constants/action-types";

const dataRequested = () => {
  return {
    type: FETCH_DATA_REQUESTED
  };
};

const dataLoaded = (newData) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: newData
  };
};

const dataError = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error
  };
};

const fetchData= (apiService) => () => (dispatch) => {
  dispatch(dataRequested());
  apiService.getData()
      .then((data) => dispatch(dataLoaded(data)))
      .catch((err) => dispatch(dataError(err)));
};

export {
  fetchData
};

