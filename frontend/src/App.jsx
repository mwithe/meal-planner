import React, { useEffect, useState } from 'react'

async function fetchData() {
  const response = await fetch('http://127.0.0.1:5000/api/data');
  const data = await response.json();
  return data.message;
}

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchDataAsync = async () => {
      const result = await fetchData();
      setData(result);
    };

    fetchDataAsync();
  }, []);

  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
}

export default App;