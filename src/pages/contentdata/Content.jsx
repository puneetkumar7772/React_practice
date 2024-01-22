import React from 'react'
import Modal from '../../modal/modal'
import Register from '../../register/Register'

const Content = (props) => {

  return (
    <div style={{display:"flex",}}>
      <div style={{width:"79vw",backgroundColor:"#444",height:"93vh",overflow:"auto"}}>{props.content}
      
      <Modal/>
      <Register/>
      </div>
    </div>
  )
}

export default Content
