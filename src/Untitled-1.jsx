import React from "react";
import ReactDOM from "react-dom";

class Toggle extends React.Component { 
  render() {
    return (
      <div>
        <Parent />
          <Collection/>
          <Collection />
          <Collection />
      </div>
    );
  }
}

class Parent extends React.Component {
  render() {
    return (
      <h2>Shop</h2>
    )
  }
}

class Collection extends React.Component {
  render() {
    return (
      <div className="collection">one</div>
    )
  }
}

ReactDOM.render(<Toggle />, document.getElementById("index"));