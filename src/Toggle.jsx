import React, { useState } from 'react'

function Toggle() {
    const [status, setStatus] = useState(false)

    function HideEle(){
        setStatus(true)
    }

    function showEle(){
        setStatus(false)
    }

    function do_toggle(){
        setStatus(!status)
    }

  return (
    <div>
        <div className="section-1">
            { status ? null : <h2>Message</h2>}
            <button onClick={showEle}>Show</button>
            <button onClick={HideEle} >Hide</button>
        </div>

        <div className="section-2">
            { status ? null : <h1>Message</h1>}
            <button onClick={do_toggle}>toggle</button>
        </div>
    </div>
  )
}

export default Toggle
