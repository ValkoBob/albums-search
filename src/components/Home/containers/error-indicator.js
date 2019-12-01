import React from 'react';

const ErrorIndicator = ({query}) => {
  return (<div>
    <h2>No results for {query}</h2>
    <h4>Try checking your spelling or use more general terms</h4>
  </div>);
};

export default ErrorIndicator;
