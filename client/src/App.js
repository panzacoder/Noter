import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Editor from './components/Editor';

function App() {
  const [apiResponse, setApiResponse] = useState('');

   useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'http://localhost:9000/testAPI',
        );
        setApiResponse(result.data);
    };
    fetchData();
   }, []);

  return (
    <p className="App-intro">{apiResponse}</p>
      //<Editor />
  );
}

export default App;
