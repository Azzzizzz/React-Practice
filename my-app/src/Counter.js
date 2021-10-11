import React from "react";

class Counter extends React.Component {
  state = { count: 0 };

  onBtnClicked = () => {
    this.setState({ count: ++this.state.count });
  };

  dec = () => {
    this.setState({ count: --this.state.count });
  };
  render() {
    return (
      <div>
        <h1>Hello React From Class Component</h1>
        <h2>Count:{this.state.count}</h2>
        <button className="btn  btn-primary" onClick={this.onBtnClicked}>
          ++
        </button>
        <button className="btn btn-danger" onClick={this.dec}>
          --
        </button>
      </div>
    );
  }
}
export default Counter;
