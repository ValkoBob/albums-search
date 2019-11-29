export default class ApiServices {
  _apiITunes = 'https://itunes.apple.com/search?term=eminem';

  getDataFromITunes =  (url) => {
    const res = fetch(`${url}`, { method: 'GET'} );
    const {results} = res.json();
    return results.map((item) => {
      return this._transformItems(
          item.artistName,
          item.artworkUrl60,
          item.trackName);
    });
  };

  getData() {
    const resFromITunes = this.getDataFromITunes(`${this._apiITunes}`);
    return resFromITunes;
  }

  _transformItems = async ( artist, image, album ) => {
    return {
      artist,
      image,
      album
    }
  }
}
