import React, { Component } from "react";
// import axios from 'axios';

class Form extends Component {
constructor() {
  super();

  this.state= {
    name: "",
    price: 0,
    imgurl: ""
  }
  this.handleChange = this.handleChange.bind(this);
}

handleChange(event) {
  this.setState({
    [event.target.name]: event.target.value
  })
}


// makeNewBook(title, year, pageCount, img, review ) {
//   const body = {title: this.state.title, year: this.state.year, pageCount: this.state.pageCount, img: this.state.img, review: this.state.review}
//   axios.post('/api/books', body).then(response => {
//     this.setState({books: response.data})
//   }).catch(error => alert("Can't make a new Book at this time"))
// }


clearInput() {
  this.setState({
    name: "",
    price: 0,
    img: ""
  })

}

  render() {
    return (
      <div className="App">
        <form className="form-container">
          <label>
            <p>Image Url:</p>
            <input type="text" name="imgurl" onChange={this.handleChange}></input>
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
