import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";

class App extends Component {
constructor() {
  super();

  this.state = {
    inventory: [{
      name: "cool cat",
      price: 1000,
      img: "https://cdn.shopify.com/s/files/1/1511/4266/products/sunnies_05_530x.png?v=1575359889" 
    },

    {
      name: "cool dog",
      price: 1100,
      img: "https://images-na.ssl-images-amazon.com/images/I/51UPqx1fn1L._AC_SY450_.jpg"
    }
      
    ]
  }
}
  render() {
    return (
      <div className="App">
        <h1>App main Component</h1>

        <Dashboard 
          inventory={this.state.inventory}
        />
        <Form />
        <Header />
      </div>
    );
  }
}

export default App;
