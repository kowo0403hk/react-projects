import React from "react";

const Menu = ({ items }) => {
  const mappedItems = items.map((item) => {
    const { id, price, title, img, desc } = item;
    return (
      <article key={id} className="menu-item">
        <img src={img} alt={title} className="photo" />
        <div className="item-info">
          <header>
            <h4>{title}</h4>
            <h4 className="price">${price}</h4>
          </header>
          <p className="item-text">{desc}</p>
        </div>
      </article>
    );
  });
  return <div className="section-center">{mappedItems}</div>;
};

export default Menu;
