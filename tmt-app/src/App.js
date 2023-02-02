import React from "react";
import './App.css';
import Home from './Components/Home';
import {CustomTheme} from './Styling/CustomStyling.js';
import {ThemeProvider} from '@mui/material';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={CustomTheme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
