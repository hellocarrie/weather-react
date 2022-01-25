import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1>hello</h1>
          <Search />
        </p>
      </header>
      <footer>
        <a href="https://github.com/hellocarrie/weather-react"></a>
      </footer>
    </div>
  );
}

export default App;
