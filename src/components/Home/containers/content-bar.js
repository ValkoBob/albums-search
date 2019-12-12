import React, {Component} from 'react';

import Spinner from './spinner';
import ContentItem from './content-bar-item';
import ErrorIndicator from './error-indicator';

import './scss/data-list.scss'


const DataList = ({data}) => {
  return (
      <div className="wrapper">
        {
          data.map((item, index) => {
            const {album, artist, image, release} = item;
            return (
                <div className="box" key={index}>
                  <ContentItem
                      album={album}
                      artist={artist}
                      image={image}
                      release={release}
                  />
                </div>
            );
          })
        }
      </div>
  );
};

export default class DataListContainer extends Component {

  render() {
    const {data, loading, error} = this.props;

    if (loading) {
      return <Spinner/>;
    }

    if (error) {
      return <ErrorIndicator/>;
    }
    return <DataList data={data}/>;
  }
}
