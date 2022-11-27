import "./styles.css";

function App() {
  return (
    <div className="App">
      <Abc />
    </div>
  );
}

function Abc() {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  return (
    <div className="App">
      <h1>Hello, My name is Sonali.</h1>
      <p>Current Date is: {date}</p>
      <p>Current Time is: {time}</p>
    </div>
  );
}
export default App;
