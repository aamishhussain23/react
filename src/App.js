import { useState } from 'react';
import './App.css';
import User from './User';

function App() {
  const [count, setCount] = useState(100)
  const [data, setData] = useState(10)

  return (
    <div className="App">
      
      <User data={data} count={count}></User>
      <button onClick={() => setCount(count+1)}>Increase Count value</button>
      <button onClick={() => setData(data+1)}>Increase Data value</button>
    </div>
  );
}

export default App;
