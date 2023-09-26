import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(0)
  useEffect( () => {
    console.log('useEffect called')
  } )

  return (
    <div className="App">
      <h1>UseEffect Hooks</h1>
      <h2>COUNT :- {data}</h2>
      <button onClick={()=> setData(data+1)}>Increase value</button>
    </div>
  );
}

export default App;



// useEffect hooks :- components k banne ya fir props, state k change hone pe call hota hai 