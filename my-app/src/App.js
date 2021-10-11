import './App.css';




function Counter() {
  let count = 0
  return (
    <div>
      
      <h1>Count - {count}</h1>
    <button>++</button>
    </div>

  )
}



function App() {
  return (
    <div className="App">
      <div>
        <h1>Hello React</h1>
        <Counter/>
    </div>
    </div>
  );
 
}

export default App;
