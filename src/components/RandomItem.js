import React from 'react';

const RandomItem = ({ item }) => {
  return <div>{item ? item.name : 'No item selected'}</div>;
};

export default RandomItem;
