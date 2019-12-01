import React, {Component} from 'react';
import {connect} from 'react-redux';

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

class DataListContainer extends Component {

  render() {
    const {data, loading, error, query} = this.props;

    if (loading) {
      return <Spinner/>;
    }

    if (error) {
      return <ErrorIndicator query={query}/>;
    }
    return <DataList data={data}/>;
  }
}

const mapStateToProps = ({dataList: {data, loading, error, query}}) => {
  return {data, loading, error, query};
};


export default connect(mapStateToProps)(DataListContainer);
