import React from 'react'

function Child({func}) {
    let data = {name: 'Rahul', age : 20, pin : 8080, city : 'bihar'}

  return (

    <div>
        <p data = {func(data)}></p>
    </div>
  )
}

export default Child
