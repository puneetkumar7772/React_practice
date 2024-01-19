import React, { useState } from 'react'
import Button from '../button/Button'

const Modal = () => {
    const [open,setOpen]=useState(false)
  return (
    <div>
        <button onClick={()=>setOpen(true)}>open</button>
     {open && <><div style={{height:"300px",width:"450px",backgroundColor:"red",margin:"auto",marginTop:"100px",border:"1px solid black",borderRadius:"10px"}}></div>
 <button onClick={()=>setOpen(false)}>close</button></>}   </div>
 
  )
}

export default Modal
