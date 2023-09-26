import './App.css';
import User from './User';

function App() {
  function give_alert(){
    alert('Hello from APP')
  }
  return (
    <div className="App">
      <User func = {give_alert}></User>
    </div>
  );
}

export default App;
