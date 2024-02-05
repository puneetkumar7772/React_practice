import React, { createContext, useState } from 'react'
import Button from '../../button/Button'
import About from '../about/About'

const userData = createContext()
const List = ({value}) => {
const [usedata,setUseData]=useState("puneet mishra")

  return (
    <userData.Provider database={{usedata}}>
        <div>
        <h1>This is a list page:={usedata}</h1>
        <Button value={value}/>
    </div>
    </userData.Provider>
    
  )
}

export default List
export {userData}
