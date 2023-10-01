import './App.css';
import Child from './Child';

function App() {

  function getData(data){
    console.log(JSON.stringify(data))
  }

  return (
    <div className="App">
      <Child func = {getData}></Child>
    </div>
  );
}

export default App;
