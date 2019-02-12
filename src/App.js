import React from 'react';
import './App.css';
import funcProg from './data/functionnalProgramming';

function App(){
  const { title, pageList } = funcProg;
  return (
    <div className="App">
      <div className="title">{title}</div>
      <div className="container">
        <h2>{pageList[0].title}</h2>
        <div className="content">{pageList[0].content}</div>
      </div>
    </div>
  );
}

export default App;
