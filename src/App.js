import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [count, setCount] = useState(100)
  const [data, setData] = useState(10)

    // useEffect will only work with data
    useEffect(() => {
      console.log('useEffect called')
    }, [data])

    // useEffect will only work with count
    useEffect(() => {
      console.log('useEffect called')
    }, [count])

    // useEffect will work for both count and data
    useEffect(() => {
      console.log('useEffect called')
    }, [count, data])

  return (
    <div className="App">
      <h1>Count :- {count}</h1>
      <h2>Data :- {data}</h2>

      <button onClick={() => setCount(count+1)}>Increase Count</button>
      <button onClick={() => setData(data+1)}>Increase Data</button>
    </div>
  );
}

export default App;
