import React from "react";

const Categories = ({ filterItems, categories }) => {
  const mappedButtons = categories.map((category, index) => {
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

  return <div className="btn-container">{mappedButtons}</div>;
};

export default Categories;
