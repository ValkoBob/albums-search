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

const fetchData= () => () => (dispatch) => {
  fetch('https://itunes.apple.com/search?term=eminem')
      .then(response => response.json())
      .then((res) => {
        const {results} = res;
        return results.map((item) => {
          return {
            artist: item.artistName,
            image: item.artworkUrl100,
            album: item.trackName,
            release: item.releaseDate
          }
        })
      })
      .then((data) => dispatch(dataLoaded(data)))
      .catch((err) => dispatch(dataError(err)));
};

export {
  fetchData
};

