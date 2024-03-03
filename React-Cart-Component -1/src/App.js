import React, { useState } from "react";
import "./App.css";
import Product from "./components/Product";

const data = [
  {
    id: 1,
    name: "Noodles",
    price: 30,
    quantity: 1,
  },
  {
    id: 2,
    name: "Biriyani",
    price: 90,
    quantity: 1,
  },
  {
    id: 2,
    name: "Chips",
    price: 10,
    quantity: 1,
  },
];

function App() {

  const [products, setProducts] = useState(data);

  const handleQtyChange = (id, payload) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(product.quantity + payload, 0) }
          : product
      );
    });
  };

  const calculateTotal = () => {
    const total = products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    return total;
  };

  return (
    <div className="App" data-testid="app">
      <div data-testid="cart-products">
        {/*  map through the  data and pass props to the Product component */}
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            id={product.id}
            handleQty={handleQtyChange}
          />
        ))}
      </div>

      <h1 id="total-cart" data-testid="total-cart">
        {/* Show the total of the Cart(a actual Price of a Product = price * quantity) */}
        {/* The total price should be in this syntax `Total :123` */}
        Total :{calculateTotal()}
      </h1>
    </div>
  );
}

export default App;