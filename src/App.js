import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I'm happy to see you here.
        </p>
        <p>
          This is my first deployment app using React.
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/@nathusinghrao1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to my YouTube Channel
        </a>
      </header>
    </div>
  );
}

export default App;
