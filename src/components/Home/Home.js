import React from 'react';
import Content from './containers/content-bar';
import Search from './containers/search-bar';

const Home = () => {
  return (
      <div>
        <Search/>
        <Content/>
      </div>
  );
};

export default Home;
