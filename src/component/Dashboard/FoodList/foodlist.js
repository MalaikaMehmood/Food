import React, { useState } from 'react';
import './FoodList.css'; // Import the CSS file for styles

const FoodList = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddOrUpdateItem = () => {
    if (inputValue.trim() !== '') {
      if (editingIndex !== null) {
        const updatedItems = foodItems.map((item, index) =>
          index === editingIndex ? inputValue : item
        );
        setFoodItems(updatedItems);
        setEditingIndex(null);
      } else {
        setFoodItems([...foodItems, inputValue]);
      }
      setInputValue('');
    }
  };

  const handleDeleteItem = (index) => {
    const newFoodItems = foodItems.filter((_, i) => i !== index);
    setFoodItems(newFoodItems);
  };

  const handleEditItem = (index) => {
    setInputValue(foodItems[index]);
    setEditingIndex(index);
  };

  return (
    <div className="food-list-container">
      <h1>Food Items</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add or update a food item"
      />
      <button onClick={handleAddOrUpdateItem}>
        {editingIndex !== null ? 'Update' : 'Add'}
      </button>
      
      <ul>
        {foodItems.map((item, index) => (
          <li key={index} className="food-item">
            {item}
            <div className="button-group">
              <button onClick={() => handleEditItem(index)}>Edit</button>
              <button onClick={() => handleDeleteItem(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;

