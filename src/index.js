import React from "react";
import ReactDOM from "react-dom";

class Toggle extends React.Component { 
  render() {
    return (
      <div>
        <Parent />
          <Collection>LA</Collection>
          <Collection>NY</Collection>
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

// class Collection extends React.Component {
//   render() {
//     return (
//       <div className="collection">one</div>
//     )
//   }
// }

const Collection = props => <div>{props.children}</div>
ReactDOM.render(<Toggle />, document.getElementById("index"));