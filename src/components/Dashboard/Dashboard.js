import React from "react";
import Product from "../Product/Product";
import axios from 'axios'

function Dashboard(props) {
  
  const inventoryMapped = props.inventory.map((element) => (

    <Product key={element.id}
    name={element.name}
    price={element.price}
    img={element.img}  
    deleteItem={deleteItem}/>
    // <div className="inventory-container">
    //   <p className="inventory-text">{element.name}</p>
    //   <p className="inventory-text">{`$${element.price}`}</p>
    //   <img src={element.img} alt={`This is a ${element.name}`} />
    //   <button>Delete</button>
    //   <button>Update</button>
    // </div>
  ));

   const deleteItem = (id) => {
    console.log(id)
    axios.delete(`/api/inventory/${id}`).then(response => {
      this.setState({inventory: response.data})
      this.props.getInventory()
    }).catch(error => alert("No Book was found to remove"))
  }

  return (
    <div className="App">
      {inventoryMapped}
    </div>
  );
}

export default Dashboard;
