import React from 'react';
import { NotesTable } from './components/NotesTable';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Notes</h1>
      <div style = {{maxWidth: '70%', margin: 'auto'}}>
        <NotesTable />
      </div>
    </div>
  );
}

export default App;
