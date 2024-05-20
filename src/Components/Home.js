import React from "react";
import "./Home.css"; // Import the CSS file
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, removeCartItem } from "../ReduxToolkit/cartSlice";
import { clearCart } from "../ReduxToolkit/cartSlice";
import { Link } from "react-router-dom";


export default function Home() {
  const dispatch = useDispatch();

  const Products = [
    {
      id: 6,
      title: "Item 1",
      price: 10,
      description: "Description for item 1",
    },
    {
      id: 9,
      title: "Item 2",
      price: 20,
      description: "Description for item 2",
    },
    {
      id: 8,
      title: "Item 3",
      price: 30,
      description: "Description for item 3",
    },
    {
      id: 1,
      title: "Item 4",
      price: 40,
      description: "Description for item 4",
    },
    {
      id: 18,
      title: "Item 5",
      price: 50,
      description: "Description for item 5",
    },
    {
      id: 19,
      title: "Item 6",
      price: 60,
      description: "Description for item 6",
    },
  ];

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const RemoveFromCart = (id) => {
    dispatch(removeCartItem(id));
  }

  const addedItems = useSelector((state) => state);

  const SelectedItems = useSelector((state) => state.cart2);
  console.log("Check Selected Items: ", SelectedItems);

  const addToCart = (item) => {

    dispatch(addCartItem(item));
  };
  return (
    <div className="item-list-container">
    <Link to='/addeditems'><button>See CART </button></Link>
      <button onClick={handleClearCart}>Clear Cart</button>

      <h1>Added Items: {addedItems.cart2.length}</h1>
      <h2>Item List</h2>
      <ul>
        {Products.map((item, index) => (
          <li key={index} className="item">
          <p>id: {item.id}</p>
            <h3 className="item-title">{item.title}</h3>
            <p className="item-price">Price: ${item.price}</p>
            <p className="item-description">{item.description}</p>

            { SelectedItems.find(obj =>  parseInt(obj.id) === parseInt(item.id)) ? (
              <button onClick={() => RemoveFromCart(item.id)}> Remove fromm Cart</button>
            ) : (
              <button onClick={() => addToCart(item)}> Add to cart</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
