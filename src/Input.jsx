import React, { useState } from 'react'

function Input() {
    const [text, setText] = useState(null)
    const [flag, setFlag] = useState(false)

    function display_text(val){
        setText(val.target.value)
    }

    function show_data(val){
        setFlag(true)
    }
  return (
    
    <div>
      <h2>{text}</h2>

      { flag ? <h2>{text}</h2> : null}

      <input type="text" onChange={display_text} />

      <button onClick={show_data}>Show data</button>
    </div>
  )
}

export default Input
