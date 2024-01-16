import React from "react";
import "./Todo.css"

const Todo = () => {

  return (
    <div className="container">
      <h1>TODO APP</h1>
      <div className="main">
        <div>
          <input type="text" placeholder="Enter Your Task" />
        </div>
        <div>
          <button className="add">Add</button>
        </div>
      </div>
      <div className="content">
        <div className="data">
          <div>This is data</div>
          <div>Edit</div>
          <div>Delete</div>
        </div>

      </div>
    </div>
  );
};

export default Todo;
