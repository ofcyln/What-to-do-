import React, { useState } from 'react';

const RandomItem = ({ items }) => {
  const [randomItem, setRandomItem] = useState(null);

  const handleRandomize = () => {
    const totalWeight = items.reduce((acc, item) => acc + item.weight, 0);
    let randomIndex = Math.floor(Math.random() * totalWeight);
    let currentItem = null;
    for (let item of items) {
      currentItem = item;
      randomIndex -= item.weight;
      if (randomIndex < 0) break;
    }
    setRandomItem(currentItem);
  };

  return (
    <div className="my-4">
      <button
        onClick={handleRandomize}
        className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
      >
        Randomize
      </button>

      {randomItem && (
        <div className="bg-white rounded-lg shadow-md p-4 my-2">
          <h2 className="font-medium mb-2">Randomly selected item:</h2>
          <p className="text-lg">{randomItem.name}</p>
          <p className="text-gray-500">{randomItem.weight}</p>
        </div>
      )}
    </div>
  );
};

export default RandomItem;
