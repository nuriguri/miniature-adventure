import './App.css';
import LottieAnimation from './LottieAnimation';
import animationData from './space.json';

function App() {
  return (
    <div className="App">
      <div>
        <LottieAnimation animationData={animationData} />
      </div>
      {/* <header className="App-header">
      
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header> */}
    </div>
  );
}

export default App;
