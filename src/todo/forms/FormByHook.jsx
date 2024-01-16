import React, { useEffect, useState } from "react";
import "../forms/formByHooks.css";

const FormByHook = () => {
  // define state for two input fields

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]); //blank array for collect form data
  // end state

  //   first input field handle change
  const handleChange1 = (e1) => {
    const value = e1.target.value;
    console.log("@@@@@", value);
    setUsername(value);
  };

  //   second input field haldle change
  const handleChange2 = (e2) => {
    const value = e2.target.value;
    console.log("@@@@@", value);
    setPassword(value);
  };

  //   handle submit for submit form

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("fhfg");
    setData([...data, { username, password }]);
};
console.log(data, "84885482sss")
  
  return (
      <div>
      <div class="login-box">
        <form onSubmit={handleSubmit}>
          <div class="user-box">
            <input
              type="text"
              name=""
              value={username}
              onChange={handleChange1}
              required=""
            />
            <label>Username</label>
          </div>
          <div class="user-box">
            <input
              type="password"
              name=""
              value={password}
              onChange={handleChange2}
              required=""
            />
            <label>Password</label>
          </div>
          <center>
            <button type="submit">
              SEND
              <span></span>
            </button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default FormByHook;
