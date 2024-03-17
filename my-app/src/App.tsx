import React from 'react';
import logo from './logo.svg';
import Button from '@mui/material/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Learn more about my personal projects!
        </p>
        <Button variant="contained" color="primary">
          Click me!
        </Button>
      </header>
    </div>
  );
}

export default App;
