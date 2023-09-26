import React, { useState } from 'react'

function Greeting() {
    const [greeting, setGreeting] = useState('Hello Rahul')
    function update_hello(){
        setGreeting('Hi Rahul')
    }
  return (
    <div>
        <h2>{greeting}</h2>
        <button onClick={update_hello}>Update</button>
    </div>
  )
}

export default Greeting
