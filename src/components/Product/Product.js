import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div className="inventory-container">
      <p className="inventory-text">{this.props.name}</p>
      <p className="inventory-text">{`$${this.props.price}`}</p>
      <img src={this.props.img} alt={`This is a ${this.props.name}`} />
      <button onClick={this.props.deleteItem(this.props.key)}>Delete</button>
      <button>Update</button>
    </div>
    );
  }
}

export default Product;
