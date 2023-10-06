import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')

  function saveUser(e){
    e.preventDefault()
    let data = {name, email, number};

    fetch('https://localhost:4000/api', {
      method: 'POST',
      headers: {
        'Accept' : 'aaplication/json',
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify(data)
    }).then((result) => {
      result.json().then((resp) => {
        console.log('resp', resp)
      })
    })
  }
  

  return (
    <div className="App">
      <form onSubmit={saveUser} >
        <input type="text" name='name' placeholder='Enter your name' onChange={(e) => setName(e.target.value)}/>
        <br />
        <br />
        <input type="email" name='email' placeholder='Enter your mail' onChange={(e) => setEmail(e.target.value)} />
        <br />
        <br />
        <input type="number" name='number' placeholder='Enter your number' onChange={(e) => setNumber(e.target.value)} />
        <br />
        <br />
        {/* <input type="button" value='save data'/> */}
        <button>save data</button>
      </form>
    </div>
  );
}

export default App;
