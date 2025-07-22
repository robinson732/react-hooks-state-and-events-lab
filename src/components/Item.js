import React from "react";

function Item({ name, category }) {
  const [clicked, setClicked] = React.useState(false);
  if (clicked) {
    return (
      <li className="in-cart">
        <span>{name}</span>
        <span className="category">{category}</span>
        <button className="remove" onClick={() => setClicked(false)}>
          Remove from Cart
        </button>
      </li>
    );
  }else if (!clicked) {
    return (
      <li className="not-in-cart">
        <span>{name}</span>
        <span className="category">{category}</span>
        <button className="add" onClick={() => setClicked(true)}>
          Add to Cart
        </button>
      </li>
    );
  }
}

export default Item;
