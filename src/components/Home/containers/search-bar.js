import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {fetchData, dataRequested} from '../../../redux/actions';

class SearchBar extends Component {
  render() {
    let search;
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-primary">
          <form className="form-inline my-2 my-lg-0" onSubmit={(e) => {
            e.preventDefault();
            if (!search.value.trim()) {
              return null;
            }
            this.props.dataRequested();
            this.props.fetchData(search.value);
            search.value = '';
          }}>
            <input className="form-control mr-sm-2" type="text" placeholder="Search" ref={(node) => search = node}/>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchData, dataRequested}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
