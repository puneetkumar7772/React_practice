import React, { useState } from "react";
import List from "../list/List";
import { Link, NavLink } from "react-router-dom";
import Home from "../home/Home";

const About = ({ value }) => {
  const [values, setvalue] = useState("");
  const [viewData, setViewData] = useState("");
  const [color, setcolor] = useState("black");
  const [name, setname] = useState("");


  const handleSubmit = () => {
    setViewData(values);
    setvalue("");
  };
  console.log(viewData);

  const handleRed = (red) => {
    console.log("red");
    setcolor("red");
    setname(red);
  };

  const handleblue = (blue) => {
    console.log("blue");
    setcolor("blue");
    setname(blue);
  };

  const handlegreen = (green) => {
    console.log("green");
    setcolor("green");
    setname(green);
  };

  const handleorange = (orange) => {
    console.log("orange");
    setcolor("orange");
    setname(orange);
  };

  return (
    <div>
      <h1>This is a about page </h1>
      {/* <List value= {value}/> */}
      <button>
        <Link to="/" state={"this is about page"}>
          Show
        </Link>
      </button>
      <div>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={values}
          onChange={(e) => setvalue(e.target.value)}
        />
        <h1>This is input field value:-{viewData}</h1>
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <div
        style={{
          width: "400px",
          margin: "auto",
          height: "150px",
          backgroundColor: color,
          borderRadius: "25px",
        }}
      >
        <h1>{name}</h1>
      </div>
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => handleRed("red")}
      >
        Red
      </button>
      <button
        style={{ backgroundColor: "blue" }}
        onClick={() => handleblue("blue")}
      >
        Blue
      </button>
      <button
        style={{ backgroundColor: "green" }}
        onClick={() => handlegreen("green")}
      >
        green
      </button>
      <button
        style={{ backgroundColor: "orange" }}
        onClick={() => handleorange("orange")}
      >
        orange
      </button>
    
    </div>
  );
};

export default About;
