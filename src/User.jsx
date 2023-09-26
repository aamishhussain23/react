import React from 'react'

function User({func}) {
  return (
    <div>
      <h1>User</h1>
      <button onClick={func}>Alert from app</button>
    </div>
  )
}

export default User
