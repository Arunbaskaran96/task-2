// import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import Nav from "./Navbar";

import Products from "./Data";
import { useState } from "react";
import Cart from "./Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  let Addtocart = (props) => {
    setCart([...cart, props]);
    setTotal(total + props.price);
  };

  let removeCart = (props) => {
    let idx = cart.findIndex((item) => props.id === item.id);
    cart.splice(idx, 1);
    setCart([...cart]);
    setTotal(total - props.price);
  };
  return (
    <div className="container">
      <Nav cart={cart}></Nav>
      <div className="row">
        <div className="col-md-9">
          <h3>Products</h3>
          <div className="row">
            {Products.map((product) => {
              return <Card cart={cart} props={product} func={Addtocart}></Card>;
            })}
          </div>
        </div>
        <div className="col-md-3">
          <h3>Cart</h3>
          <Cart cart={cart} removeCart={removeCart}></Cart>
          <h3>Total-{total}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
