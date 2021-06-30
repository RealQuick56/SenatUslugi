import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

   const [place, setPlace] = useState([])

   useEffect(() => {
     axios({
       method: "GET",
       url: "http://127.0.0.1:8000/api/test-api/"
     }).then(response => {
       setPlace(response.data)
     })
   }, [])
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <ul>
        {place.map(p => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
