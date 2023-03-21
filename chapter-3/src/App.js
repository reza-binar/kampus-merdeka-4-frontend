import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import HelloClassComponent from "./components/HelloClassComponent";
import ThisIsComponent from "./components/ThisIsComponent";

function App() {
  return (
    <>
      <Hello type="small" victor="Victor Arie" />
      <ThisIsComponent />

      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello World
          </a>
        </header>
      </div> */}

      <HelloClassComponent />
    </>
  );
}

export default App;
