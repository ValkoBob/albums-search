import React from 'react';

const DataListItem = ({ artist, image, album }) => {
  return (
      <div className="data-list-item">
        <div className="data-cover">
          <img src={image} alt="cover" />
        </div>
        <div className="data-details">
          <span className="data-title">{album}</span>
          <div className="data-author">{artist}</div>
        </div>
      </div>
  );
};

export default DataListItem;
