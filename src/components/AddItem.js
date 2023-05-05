import React, { useState } from 'react';

function AddItem({ onAddItem }) {
  const [text, setText] = useState('');
  const [weight, setWeight] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClicked(true);

    if (!text || !weight) {
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
    setIsClicked(false);
  };

  return (
    <form className="flex flex-col align-center mb-4" onSubmit={handleSubmit}>
      <h2 className="pb-2">Add an item</h2>

      <div>
        <input
          type="text"
          placeholder="Enter what you want to do"
          className={`${
            isClicked && text.length < 1
              ? 'border-2 border-red-600'
              : 'border-2 border-gray-200'
          } p-2 mr-2 w-64 rounded`}
          value={text}
          onChange={(e) => (setText(e.target.value), setIsClicked(false))}
        />

        <input
          type="number"
          placeholder="Priority (1-10)"
          className={`${
            isClicked && weight.length < 1
              ? 'border-2 border-red-600'
              : 'border-2 border-gray-200'
          } p-2 mr-2 w-64 rounded`}
          min="1"
          max="10"
          value={weight}
          onChange={(e) => (setWeight(e.target.value), setIsClicked(false))}
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Item
        </button>
      </div>
    </form>
  );
}

export default AddItem;
