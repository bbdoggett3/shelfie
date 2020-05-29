import React, { Component } from "react";


class Header extends Component {

  render() {
    return (
      <div className="App">
        <div className='nav-container'>
          <img src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fshelfie.png?v=1590790218504" alt="logo"/>
          <button>Dashboard</button>
          <button>Add Inventory</button>
        </div>
      </div>
    );
  }
}

export default Header;