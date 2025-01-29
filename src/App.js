import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import './App.css';

function App() {

  const [variant, setVariant] = useState("success");
  const [btnSize, setBtnSize] = useState("small")

  function onClickChangeColor()
  {  
    if (variant==="success")
    {
      setVariant("danger");
    }
    else
    {
      setVariant("success");
    } 
  }

  function onClickChangeSize() 
  {
    if (btnSize === "small") 
      {
        setBtnSize("large");
      } 
      else 
      {
        setBtnSize("small");
    } 
  }

  return (
    <div className="App">
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
          Learn React
        </a>
        <Button data-testid="change-color-button" variant={variant} onClick={onClickChangeColor}>Success</Button>
        <button data-testid="change-size-button"
          onClick={onClickChangeSize}
          style=
          {{
            padding: btnSize === "small" ? "10px 20px" : "30px 60px"
          }}>
          {btnSize === "small" ? "tiny little button" : "huuge button"}
        </button>
      </header>
    </div>
  );
}

export default App;
