import React from "react";

function Product (props) {
  const {item: {id, name, price, img}, deleteProduct} = props
    return (
      <div className="inventory-container">
      <p className="inventory-text">{name}</p>
      <p className="inventory-text">{`$${price}`}</p>
      <img src={img} alt={`This is a ${name}`} />
      <button onClick={ () => deleteProduct(id)}>Delete</button>
      <button>Update</button>
    </div>
    );
  }


export default Product;
