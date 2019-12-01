import React from 'react';


const DataListItem = ({album, artist, image}) => {
  return (
      <div className="data-list-item">
        <div className="data-cover">
          <img src={image} alt="cover"/>
        </div>
        <div className="data-details">
          <span className="data-title">{album}</span>
          <div className="data-author"><h5>{artist}</h5></div>
        </div>
      </div>
  );
};

export default DataListItem;
