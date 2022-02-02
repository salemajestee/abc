import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FeedbackFunctionComponent } from './components/feedbackComponent'
import { FeedbackCustomComponent } from './components/feedbackCustom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>V3</p>
        <FeedbackFunctionComponent/>
        <FeedbackCustomComponent/>
      </header>
    </div>
  );
}

export default App;
