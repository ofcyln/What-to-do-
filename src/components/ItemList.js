import React from 'react';

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item.name} - {item.weight}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
