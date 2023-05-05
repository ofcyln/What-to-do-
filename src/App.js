import React, { useState, useEffect } from 'react';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';
import RandomItem from './components/RandomItem';
import {
  saveListToLocalStorage,
  getListFromLocalStorage,
} from './utils/localStorage';

const App = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');

  useEffect(() => {
    // Load list from localStorage on initial render
    const storedList = getListFromLocalStorage();
    setItems(storedList);
  }, []);

  useEffect(() => {
    // Save list to localStorage whenever it changes
    saveListToLocalStorage(items);
  }, [items]);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleSelectRandom = () => {
    const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
    let randomNum = Math.floor(Math.random() * totalWeight);
    let selectedItem = null;
    items.some((item) => {
      randomNum -= item.weight;
      if (randomNum < 0) {
        selectedItem = item;
        return true;
      }
      return false;
    });
    setSelectedItem(selectedItem);
  };

  const onRemoveItem = (index) => {
    const newItems = [...items];

    newItems.splice(index, 1);

    setItems(newItems);

    localStorage.setItem('items', JSON.stringify(newItems));
  };

  return (
    <div className="p-4 m-4 rounded-md bg-gray-300">
      <RandomItem item={selectedItem} />

      <h1 className="pb-3 text-4xl text-gray-600">What to do? </h1>

      <AddItem onAddItem={handleAddItem} />

      <ItemList items={items} onRemoveItem={onRemoveItem} />

      {items.length > 1 ? (
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleSelectRandom}
        >
          Tell me what to do
        </button>
      ) : null}
    </div>
  );
};

export default App;
