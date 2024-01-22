import "./App.css";
import { useState } from "react";
import Input from "./input/Input";
import Navbar from "./navbar/Navbar";
import Button from "./button/Button";
import DrawingBoard from "./input/Input";
import ResponsiveGrid from "./input/Input";
import Modal from "./modal/modal";
import Register from "./register/Register";
import Navigation from "./pages/navigation/navigation";
import Sidebar from "./pages/sidebar/Sidebar";
import Content from "./pages/contentdata/Content";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Footer from "./footer/Footer";

function App() {
  const [Name, setName] = useState("");
  const [data, setData] = useState("");

  const [value, setFirstValue] = useState({ first: "", second: "" });
  const [add, setAdd] = useState("");

  const handleSubmit = (e) => {
    let value = "";
    for (let i of Name) {
      value = i + value;
    }
    if (Name === value) {
      setData("this is a palindrome");
    } else {
      setData("this is not a palindrome");
    }
  };

  const handleChange = (e) => {
    setFirstValue({ ...value, [e.target.name]: e.target.value });
  };
  console.log(value, "dfghkjl;");

  const handleAdd = () => {
    console.log("add");
    const val = parseInt(value.first) + parseInt(value.second);
    setAdd(val);
  };
  console.log(add);

  const handleSubstract = () => {
    console.log("subtract");
    const val = parseInt(value.first) - parseInt(value.second);
    setAdd(val);
  };

  const handleMultiply = () => {
    console.log("multiply");
    const val = parseInt(value.first) * parseInt(value.second);
    setAdd(val);
  };

  const handleDivide = () => {
    console.log("divide");
    const val = parseInt(value.first) / parseInt(value.second);
    setAdd(val);
  };

  return (
    <div className="App">
      {/* <DrawingBoard/> */}
      {/* <Navbar/>
      // <ResponsiveGrid/>
      <Button/> */}
      {/* <Modal/> */}
      {/* <Register/>
      <Button value = {"save"} data = {handleClick}/> */}

      {/* <h1>Practice about reuseable component</h1> */}
      {/* <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <Navigation value = {"This is a navigation bar"} />
        </div>
        <div style={{display:"flex",gap:""}}>
          <div>
            <Sidebar data = {"This is a side bar"} />
          </div>
          <div>
            <Content content = {"this is a content part in this para"}/>
          </div>

        </div>
      </div> */}
      <div>
        <input
          type="text"
          name="Name"
          placeholder="Enter any value"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Submit</button>
        <p>This is a input field value:-{data}</p>

      {/* 
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Navigation/>
      <Sidebar/>

    </Box> */}
      </div>

      {/* <Footer/> */}

      <div style={{marginTop:"8%"}}>
        <input
          type="number"
          name="first"
          placeholder="Enter first digit"
          onChange={handleChange}
        />
        <input
          type="number"
          name="second"
          placeholder="Enter Second digit"
          onChange={handleChange}
        />
        <input
          type="text"
          value={add}
          placeholder="Enter first digit"
          readOnly
        />
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubstract}>subtract</button>
        <button onClick={handleMultiply}>multiply</button>
        <button onClick={handleDivide}>divide</button>
      </div>
      <h1 style={{color:"#444",fontWeight:"bold"}}>YOUR TOTAL AMMOUNT :-{add}</h1>
    </div>
  );
}

export default App;
