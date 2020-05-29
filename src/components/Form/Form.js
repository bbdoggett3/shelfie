import React, { Component } from "react";
// import axios from 'axios';

class Form extends Component {
constructor() {
  super();

  this.state= {
    name: "",
    price: 0,
    img: ""
  }
  this.handleChange = this.handleChange.bind(this);
}

handleChange(event) {
  this.setState({
    [event.target.name]: event.target.value
  })
}

clearInput() {
  this.setState({
    name: "",
    price: 0,
    img: ""
  })
}

// componentDidMount() {
//   this.props.getInvetory()
// }

// addItem() {
//   const newItem = {
//     name: this.state.name,
//     price: this.state.price,
//     img: this.state.img
//   }

//   axios.post('/api/product', newItem).then(response => {
//     this.setState({inventory: response.data})
//   })
// }

  render() {
  
    return (
      <div className="App">
        <form className="form-container">
          <label>
            <p>Image Url:</p>
            <input type="text" name="img" onChange={this.handleChange}></input>
          </label>
          <label>
            <p>Product Name:</p>
            <input type="text" name="name" onChange={this.handleChange}></input>
          </label>
          <label>
            <p>Price:</p>
            <input type="text" name="price" onChange={this.handleChange}></input>
          </label>
          <div className="form-btn=container">
            <button className="form-btn" onClick={this.clearInput}>Cancel</button>
            <button className="form-btn">Add to Inventory</button>
            
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
