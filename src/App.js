import { useState } from 'react';
import './App.css';
import Button from './Button'

function App() {
  const [showText, setShowText] = useState(false)

  const handleClick = () => {
    setShowText(!showText)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button handleClick={handleClick} text={'click me'}/>
        {showText && <div>You clicked the button</div>}
      </header>
    </div>
  );
}

export default App;
