import { useRef } from 'react';
import './App.css';

function App() {

  let inputRef = useRef(null)
  function handleBtn(){
      inputRef.current.value = "hello world"
      inputRef.current.focus()
      inputRef.current.style.color = 'red'
      // inputRef.current.style.display = 'none'
  }

  return (
    <div className="App">
      <input type="text" ref={inputRef} />
      <button onClick={handleBtn}>Handle input</button>
    </div>
  );
}

export default App;
