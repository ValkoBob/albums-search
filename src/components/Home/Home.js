import React, {Component} from 'react';
import Content from './containers/content-bar';
import Search from './containers/search-bar';
import fetchJsonp from "fetch-jsonp";

class Home extends Component {
  state = {
    data: [],
    loading: false,
    error: null,
    URL_ITUNES: 'https://itunes.apple.com/search?term=',
    URL_DEEZER: 'https://api.deezer.com/search?q='
  };

  fetchData = (query) => {
    const {URL_ITUNES, URL_DEEZER} = this.state;
    this.setState({
      error: null
    });
    const firstAPICall = fetch(`${URL_ITUNES}${query}`);
    const secondAPICall = fetchJsonp(`${URL_DEEZER}${query}&output=jsonp`);
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
            this.setState({
              error: 'Error!'
            });
          }
          this.setState({
            data
          })
        })
        .catch((err) => this.setState({
          error: err
        }));
  };

  render() {
    const { data, loading, error} = this.state;
    return (
        <div>
          <Search
              fetchData={this.fetchData}
          />
          <Content
              data={data}
              loading={loading}
              error={error}
          />
        </div>
    );
  }
}

export default Home;
