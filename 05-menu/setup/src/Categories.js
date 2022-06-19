import React from "react";

const Categories = ({ filterItems, categories }) => {
  const mappedCategories = categories.map((category, index) => {
    return (
      <button
        type="button"
        className="filter-btn"
        key={index}
        onClick={() => filterItems(category)}
      >
        {category}
      </button>
    );
  });

  return <div className="btn-container">{mappedCategories}</div>;
};

export default Categories;
