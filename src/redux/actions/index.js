import {FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, FETCH_DATA_REQUESTED} from "../constants/action-types";

export const dataRequested = () => {
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

const dataError = (error, query) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
    query
  };
};


const URL_ITUNES = 'https://itunes.apple.com/search?term=';
const URL_DEEZER = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=';

export function fetchData(query) {
  return function (dispatch) {
    let firstAPICall = fetch(`${URL_ITUNES}${query}`);
    let secondAPICall = fetch(`${URL_DEEZER}${query}`);

    Promise.all([firstAPICall, secondAPICall])
        .then(values => Promise.all(values.map(value => value.json())))
        .then(finalVals => {
          let firstAPIResp = finalVals[0];
          let secondAPIResp = finalVals[1];
          const {results} = firstAPIResp;
          const {data} = secondAPIResp;
          const resultFromITunes = results.map((item) => {
            return {
              artist: item.artistName,
              image: item.artworkUrl100,
              album: item.trackName,
            }
          });
          const resultFromDeezer = data.map((item) => {
            return {
              artist: item.artist.name,
              image: item.album.cover_small,
              album: item.title,
            }
          });
          return Array.from(new Set([...resultFromITunes, ...resultFromDeezer]));
        })
        .then((data) => {
          if (data.length === 0) {
            return dispatch(dataError('Error!', query))
          }
          return dispatch(dataLoaded(data))
        })
        .catch((err) => dispatch(dataError(err)));
  }
}


