import React from "react";
import { useCart } from "react-use-cart";
import { BrowserRouter as Router,Routes,Route, Link } from "react-router-dom";
import "../../Styles/MyCart.css";
const Cart = () => {
  const {
    isEmpty,
    items,
    totalItems,
    totalUniqueItems,
    cartTotal,
    addItem,
    quantity,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  
  if (isEmpty) return <h2> Cart is Empty Explore The store</h2>;
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-8 flex-wrap">
          <h1>YOUR PRODUCTS</h1>
          {items.map((item, index) => {
            return (
              <div className="item-container d-flex flex-wrap">
                <img src={item.Image} sizes="10px" alt="" />
                <div className="row">
                  <div className="col-md-12 mx-md-5">
                    <b>
                      <h1>{item.Name}</h1>
                    </b>
                    <b> Per Item:${item.price}</b>
                    <br />
                    <b>Products Price:${item.price * item.quantity}</b>
                    <br />
                    <b>
                      <button
                        className="btn btn-sm btn-warning"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                    </b>
                    <b className="p-2">QTY:{item.quantity}</b>
                    <b className="p-2">
                      <button
                        className="btn btn-sm btn-success"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </b>
                    <b>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => removeItem(item.id)}
                      >
                        X
                      </button>
                    </b>
                    <hr />
                  </div>
                </div>
              </div>
            );
          })}
          <hr />
          <pre>
            <b>Discount ?</b>
          </pre>
          <pre className="bg-warning">
            <b>Cart Total ${cartTotal}</b>
          </pre>
        </div>
        <div className="col-md-4">
          <h1> PAYMENT</h1>
          <label htmlFor="CardNumber">Card Number</label>
          <input type="text" id="CardNumber" placeholder="Card Number 123-78689-8782" />
          <label htmlFor="CardName">Card Holder Name</label>
          <input type="text" id="CardName" placeholder="Name On Card" />
          <div className="row">
            <div className="col-md-6"><input type="text" id="expiration" placeholder="Expiration 11/23" />
          </div>
            <div className="col-md-6"><input type="text" id="cvv" placeholder="CVV 663" />
          </div>
          </div>
          <p><a href="">Terms</a> & <a href=""> Conditions</a> are applied.Payment is secured by google Pay</p>
        <Link to='/Checkout' className='btn btn-success'>Checkout</Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;

//   <div>
//   {items.map((item, index) => {
//     console.log(item);
//     return (
//       <div key={index}>
//         <p>{item.Name}</p>
//         <p>${item.price}</p>

//         <img src={item.Image} width={"50px"} alt="" />

//         <button
//           onClick={() => {
//             updateItemQuantity(item.id, item.quantity - 1);
//           }}
//         >
//           -
//         </button>

//         <button
//           onClick={() => {
//             updateItemQuantity(item.id, item.quantity + 1);
//           }}
//         >
//           +
//         </button>
//         <button
//           onClick={() => {
//             removeItem(item.id);
//           }}
//         >
//           Remove
//         </button>
//         <p>Item{item.quantity}</p>
//       </div>
//     );
//   })}
//   <p>Cart Total$ {cartTotal}</p>

//   <button>Check Out</button>
//   <button onClick={emptyCart}>Empty Cart</button>
// </div>
