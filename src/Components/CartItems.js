import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Home.css"; // Import the CSS fil
import { removeCartItem } from "../ReduxToolkit/cartSlice";

export default function CartItems() {
  
  const dispatch = useDispatch();


  const removeFromCart = (index) => {
  dispatch(removeCartItem(index));
  };

  const SelectedItems = useSelector((state) => state.cart2);
  return (
    <div>
      <h1>Cart Items: </h1>

      <ul>
      {SelectedItems.map((item, index) => (
        <li key={index} className="item">
          <h3 className="item-title">{item.title}</h3>
          <p className="item-price">Price: ${item.price}</p>
          <p className="item-description">{item.description}</p>

          <button onClick={() => removeFromCart(item.id)}>
           
            Remove from Cart
          </button>
        </li>
      ))}
      </ul>
    </div>
  );
}
