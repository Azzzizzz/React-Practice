import React from "react";
import Counter from "./Counter";
import SpecialCounter from "./SpecialCounter";

function App() {
  return (
    <div className="App">
      <div>
        <Counter />
        <SpecialCounter count={100} />
        <SpecialCounter count={10} />
        <SpecialCounter count={134} />
        <SpecialCounter count={133} />
      </div>
    </div>
  );
}

export default App;
