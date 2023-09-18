import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link, useParams } from 'react-router-dom'
import Items from '../Assets/pastaData'
import { useCart } from 'react-use-cart'
const PastaDetail = () => {
    const { addItem, quantity } = useCart();
    return (
    <div>        
        <h1 className="text-center mt-2 mb-2">item Topping</h1>
        <div className="d-flex flex-wrap">
          {Items.map((item) => {
            return (
              <div className="single-card" key={item.id}>
                <Link to={`/pastaDetail/${item.id}`} className="decoration-remover">
                  <img src={item.Image} alt="Denim Jeans" className="w-100" />
                  <h1>{item.Name}</h1>
                  <p className="single-price">${item.price}</p>
                  <p className="single-card-decs">{item.Decription}</p>
                  <p></p>
                </Link>
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    addItem(item);
                    alert("Product Added To Cart");
                  }}
                >
                  Add to cart{}
                </button>
              </div>
            );
          })}
        </div>
    </div>
  )
}

export default PastaDetail;