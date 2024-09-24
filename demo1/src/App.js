import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img
          src="https://bucket-1259402589.cos.ap-beijing.myqcloud.com/wallhaven-96geow.jpg"
          // className="App-logo"
          className="wallPaper"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reloadX🍃.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
