import React, { useState } from 'react';

const CategoryTabs = ({ categories = [], onSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0] || '');

  const handleSelect = (category) => {
    setSelectedCategory(category);
    onSelect(category);
  };

  return (
    <div className="category-tabs">
      {categories.map(category => (
        <button 
          key={category} 
          className={selectedCategory === category ? 'active' : ''}
          onClick={() => handleSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;