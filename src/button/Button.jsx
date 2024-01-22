import React from 'react'
import Products from '../footer/Footer'

const Button = ({data,value}) => {

  return (
    <div>
   <button onClick={data}>{value}</button>
    </div>
  )
}

export default Button
