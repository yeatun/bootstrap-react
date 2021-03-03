import React from 'react';
import './App.css';
import {Button} from 'react-bootstrap';
import TopHeadline from './components/TopHeadline';

function App() {
  return (
    <div >
      <header className="App-header">
       <h1>react</h1>
       
        <TopHeadline></TopHeadline>
      </header>
    </div>
  );
}

export default App;
