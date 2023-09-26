import React, { useState } from 'react'

function Profile() {
    const [loggedIn, setLoggedIn] = useState(1)
    // const [loggedIn, setLoggedIn] = useState(2)
    // const [loggedIn, setLoggedIn] = useState(7)
  return (
    <div>
      
      {
        loggedIn === 1 ?  <h1>Welcome User1</h1>
        : loggedIn === 2 ? <h1>Welcome User2</h1>
        : <h1>Welcome Guest</h1>
      }

    </div>
  )
}

export default Profile
