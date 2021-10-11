import React from "react";

class CounterC extends React.Component {
  state = { count: 0 };

  onBtnClicked = () => {
    this.setState({ count: ++this.state.count });
  };
  render() {
    return (
      <div>
        <h1>Hello React From Class Component</h1>
        <h2>Count:{this.state.count}</h2>
        <button onClick={this.onBtnClicked}>++</button>
      </div>
    );
  }
}
export default CounterC;
