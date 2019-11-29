import React from 'react';
import Content from './containers/content-bar';
import Search from './containers/search-bar';
import Pagination from './containers/pagination-bar'

const Home = () => {
  return (
      <div>
        <Search />
        <Content />
        <Pagination />
      </div>
  );
};

export default Home;
