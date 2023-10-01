import { useState } from 'react';
import './App.css';
import { useMemo } from 'react';

function App() {

  const [count, setCount] = useState(0)
  const [item, setItem] = useState(10)
  const [multiple, setMultiple] = useState()

  // use memo hook se specify kar sakte hai ki kon sa function kis specific state ya props par hi chalega baakiyon par nahi
  let Multiple_of_count = useMemo( () => {
    console.log("Multiple_of_count run")
    return count*5;
  }, [count])
  

  return (
    <div className="App">
      <h1>Use Memo hook in react</h1>
      <h2>Count : {count}</h2>
      <h2>Item : {item}</h2>
      <h2>Multiple of Count : {Multiple_of_count}</h2>
      <button onClick={() => setCount(count+1)}>Update Count</button>
      <button onClick={() => setItem(item*10)} style={{marginLeft: '15px'}}>Update Item</button>
    </div>
  );
}

export default App;
