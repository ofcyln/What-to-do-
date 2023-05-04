import React, { useState } from 'react';

const AddItem = ({ onAddItem }) => {
  const [itemName, setItemName] = useState('');
  const [itemWeight, setItemWeight] = useState(1);

  const handleNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleWeightChange = (event) => {
    setItemWeight(parseInt(event.target.value));
  };

  const handleAddItem = () => {
    onAddItem({ name: itemName, weight: itemWeight });
    setItemName('');
    setItemWeight(1);
  };

  return (
    <div>
      <input type="text" value={itemName} onChange={handleNameChange} />
      <select value={itemWeight} onChange={handleWeightChange}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
      </select>
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default AddItem;
