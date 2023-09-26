import React, { useEffect } from 'react'

function User({count, data}) {

    // useEffect is running only with count props
    useEffect(() => {
        console.log('UseEffect called')
    }, [count])


    // useEffect is running only with data props
    useEffect(() => {
        console.log('UseEffect called')
    }, [data])


  return (
    <div>
        <h1>useEffect with Props</h1>
        <h2>Count :- {count}</h2>
        <h2>Data :- {data}</h2>
    </div>
  )
}

export default User
