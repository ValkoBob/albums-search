import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchData } from '../../../redux/actions';

import Spinner from './spinner';
import ContentItem from './content-bar-item';
import ErrorIndicator from './error-indicator';


const DataList = ({ data}) => {
  return (
      <ul className="data-list">
        {
          data.map((item) => {
            return (
                <li key={item.id}>
                  <ContentItem
                      item={item}
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
