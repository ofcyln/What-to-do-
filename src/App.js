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
  const [selectedItem, setSelectedItem] = useState(null);

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

  return (
    <div>
      <h1>Item List</h1>
      <AddItem onAddItem={handleAddItem} />
      <ItemList items={items} />
      <button onClick={handleSelectRandom}>Select Random Item</button>
      <RandomItem item={selectedItem} />
    </div>
  );
};

export default App;
