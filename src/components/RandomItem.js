import React, { useState, useEffect } from 'react';

const RandomItem = ({ item }) => {
  const [randomItem, setRandomItem] = useState(item);

  useEffect(() => {
    setRandomItem(item);
  }, [item]);

  return (
    <>
      {item && (
        <div className="my-4">
          <div className="bg-white rounded-lg shadow-md p-4 my-2">
            <h2 className="font-medium mb-2">Randomly selected item:</h2>
            <p className="text-lg">{randomItem.text}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default RandomItem;
