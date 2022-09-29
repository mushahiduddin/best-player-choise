import logo from './logo.svg';
import './App.css';
import LoadAllData from './Component/LoadAllData/LoadAllData';
import { useEffect, useState } from 'react';

function App() {
  const [allData, setAllData] = useState([]);

    useEffect( () =>{
        fetch(`data.json`)
        .then(res=> res.json())
        .then(data => setAllData(data))      
    }, [])
  return (
    <div className="App">
      <LoadAllData props={allData}></LoadAllData>
    </div>
  );
}

export default App;
