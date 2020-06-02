import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import axios from 'axios';

class App extends Component {
constructor() {
  super();

  this.state = {
    inventory: []
  }

  this.componentDidMount = this.componentDidMount.bind(this);
  this.getInventory = this.getInventory.bind(this);
  this.delete = this.delete.bind(this);
}

componentDidMount() {
  this.getInventory();
}

getInventory() {
  axios.get('/api/inventory').then(response => {
    console.log(response)
    this.setState({inventory: response.data})
  }).catch(error => alert("Didn't get a inventory back."))
}


delete(id) {
  console.log(id)
  axios.delete(`/api/inventory/${id}`).then(response => {
    this.setState({inventory: response.data})
  }).catch(error => alert("No Book was found to remove"))
}


  render() {
    console.log(this.state.inventory)
    return (
      <div className="App">
        <Header />
        <Dashboard 
          inventory={this.state.inventory}
        />
        <Form getInventory ={this.getInventory}/>
      </div>
    );
  }
}

export default App;
