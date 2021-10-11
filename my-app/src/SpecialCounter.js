import React from "react";

class SpecialCounter extends React.Component {
  state = { count: this.props.count };
  inc = () => {
    let currentCount = this.state.count;
    this.setState({ count: ++currentCount });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.inc}>++</button>
      </div>
    );
  }
}
export default SpecialCounter;
