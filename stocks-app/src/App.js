import logo from './logo.svg';
import stock from './stock.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={stock} className="App-logo" alt="logo" />
        <p>
          Stock Trading Competition
        </p>
        <a
          className="App-link"
          href="https://www.investopedia.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Basic Trading Termninology
        </a>
      </header>
    </div>
  );
}

export default App;
