import React from 'react';

const SearchBar = ({fetchData}) =>  {
    let search;
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-primary">
          <form className="form-inline my-2 my-lg-0" onSubmit={(e) => {
            e.preventDefault();
            if (!search.value.trim()) {
              return null;
            }
            fetchData(search.value);
            search.value = '';
          }}>
            <input className="form-control mr-sm-2" type="text" placeholder="Search" ref={(node) => search = node}/>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
    )
  };

export default SearchBar;
