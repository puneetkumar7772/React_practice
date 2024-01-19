import './App.css';
import { useState } from 'react';
import Input from './input/Input';
import Navbar from './navbar/Navbar';
import Button from './button/Button';
import DrawingBoard from './input/Input';
import ResponsiveGrid from './input/Input';
import Modal from './modal/modal';
import Register from './register/Register';

function App() {
  //const [data,setData]=useState(false)
  return (
    <div className="App">
      {/* <DrawingBoard/> */}
      {/* <Navbar/>
      <ResponsiveGrid/>
      <Button/> */} 
      {/* <Modal/> */}
      <Register/>
      
    <h1>Practice about reuseable component</h1>
    <div>
    </div>
    </div>
  );
}

export default App;
