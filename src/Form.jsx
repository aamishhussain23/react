import React, { useState } from 'react'

function Form() {
    const [name, setName] = useState('')
    const [option, setOption] = useState('')
    const [check, setCheck] = useState(false)

    function print_data_in_console(e){
        console.log('name :- ', name);
        console.log('Like :- ', option);
        console.log('terms :- ', check);

        e.preventDefault()
    }

  return (
    <div>
      <h1>Handle Form in React</h1>
      <form>
        <input type="text" placeholder='Enter your name' onChange={ (e) => setName(e.target.value) }/>
        <br />
        <br />
        <select onChange={ (e) => setOption(e.target.value)}>
            <option>Select</option>
            <option>Apple</option>
            <option>Mango</option>
            <option>Grapes</option>
        </select>
        <br />
        <br />
        <input type="checkbox" onChange={ (e) => setCheck(e.target.checked)} />
        <span>Accept terms & conditions</span>
        <br />
        <br />
        <input type="submit" onClick={print_data_in_console}/>
      </form>
    </div>
  )
}

export default Form
