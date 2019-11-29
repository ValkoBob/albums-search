import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchData } from '../../../redux/actions';

import Spinner from './spinner';
import ContentItem from './content-bar-item';
import ErrorIndicator from './error-indicator';


const DataList = ({data}) => {
  return (
      <ul className="data-list">
        {
          data.map((item, index) => {
            const {album, artist, image, release} = item;
            return (
                <li key={index}>
                  <ContentItem
                      album = {album}
                      artist = {artist}
                      image = {image}
                      release = {release}
                  />
                </li>
            );
          })
        }
      </ul>
  );
};

class DataListContainer extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { data, loading, error} = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      console.log(error);
      return <ErrorIndicator />;
    }

    return <DataList data={data} />;
  }
}

const mapStateToProps = ({ dataList: { data, loading, error }}) => {
  return { data, loading, error };
};

const mapDispatchToProps = (dispatch, { apiService }) => {
  return bindActionCreators({
    fetchData: fetchData(apiService)
  }, dispatch);
};

export default
    connect(mapStateToProps, mapDispatchToProps)(DataListContainer);
