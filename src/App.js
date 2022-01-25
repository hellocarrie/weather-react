import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1>Weather App</h1>
          <Search />
        </p>
      </header>
      <div>
        <a href="https://github.com/hellocarrie/weather-react"></a>
      </div>
    </div>
  );
}

export default App;
