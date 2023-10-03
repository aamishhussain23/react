import React from 'react'
import { useNavigate } from 'react-router-dom'

function Button() {

    const navigate = useNavigate()

  return (
    <button onClick={() => navigate('/contact')}>GO TO Contact</button>
  )
}

export default Button
