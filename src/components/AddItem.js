import React, { useState } from 'react';

function AddItem({ onAddItem }) {
  const [text, setText] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please enter an item name.');
      return;
    }

    if (!weight) {
      alert('Please enter a weight value.');
      return;
    }

    const newItem = {
      id: Math.floor(Math.random() * 10000),
      text: text,
      weight: parseInt(weight),
    };

    onAddItem(newItem);
    setText('');
    setWeight('');
  };

  return (
    <form className="flex items-center mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter item name"
        className="border-2 border-gray-200 p-2 mr-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter weight (1-10)"
        className="border-2 border-gray-200 p-2 mr-2"
        min="1"
        max="10"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Add Item
      </button>
    </form>
  );
}

export default AddItem;
