import React, { useState, useEffect } from 'react';

const RandomItem = ({ item }) => {
  const [randomItem, setRandomItem] = useState(item);

  useEffect(() => {
    setRandomItem(item);
  }, [item]);

  return (
    <>
      {randomItem && (
        <div className="flex justify-center">
          <div className="p-6 mb-2 w-auto bg-green-500 text-white aling-center rounded">
            <p className="text-4xl">{randomItem.text}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default RandomItem;
