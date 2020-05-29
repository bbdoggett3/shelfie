import React from "react";
import Product from "../Product/Product";

function Dashboard(props) {
  console.log(props)
  const inventoryMapped = props.inventory.map((element) => (
    <div className="inventory-container">
      <p className="inventory-text">{element.name}</p>
      <p className="inventory-text">{`$${element.price}`}</p>
      <img src={element.img} alt={`This is a ${element.name}`} />
    </div>
  ));

  return (
    <div className="App">
      <div>Dashboard Component</div>
      {inventoryMapped}
      <Product />
    </div>
  );
}

export default Dashboard;
