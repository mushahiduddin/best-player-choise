import logo from './logo.svg';
import './App.css';
import LoadAllData from './Component/LoadAllData/LoadAllData';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      <LoadAllData></LoadAllData>
    </div>
  );
}

export default App;
