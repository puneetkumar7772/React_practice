import React, { useEffect, useState } from "react";
import "./Register.css";
import axios from "axios";
import axiosInstance from "../axios/Axios";
import { MdDelete } from "react-icons/md";

const Register = () => {
  const [data, setdata] = useState([]);
  const [newDeletedData ,setNewDeletedData] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    role: "",
  });

  useEffect(() => {
    const data = async () => {
      try {
        const getData = await axiosInstance.get("list_polls");
        setdata(getData.data.data);
        setNewDeletedData("")
        console.log(getData.data.data, "@@@@@@@@@@@@@@@");
      } catch (error) {
        console.log("asdasdas", error);
      }
    };
    data();
  }, [newDeletedData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const registerData = await axiosInstance.post(
      `add_user?username=${formData.name}&password=${formData.password}&role=${formData.role}`
    );
    console.log("data", registerData);
    setFormData({ name: "", password: "", role: "" });
  };

  const deleteData = async (id) => {
    console.log("88888888", id);
    try {
      const deletedData = await axiosInstance.delete(`delete_poll?id=${id}`);
      console.log("!!!!!!!!!", deletedData);
      setNewDeletedData(deletedData)
    } catch (error) {
      console.log("this is delete data error", error);
    }
  };

 

  return (
    <div>
      <form
        className="form"
        style={{ margin: "auto", marginTop: "10%" }}
        onSubmit={handleSubmit}
      >
        <p className="title">Register </p>
        <p className="message">Signup now and get full access to our app. </p>
        <div className="flex"></div>
        <label>
          <input
            className="input"
            name="name"
            type="text"
            placeholder="Enter Name"
            value={formData.name}
            required=""
            onChange={handleChange}
          />
          <span>Name</span>
        </label>

        <label>
          <input
            className="input"
            type="password"
            name="password"
            value={formData.password}
            placeholder="Enter Password"
            onChange={handleChange}
            required=""
          />
          <span>Password</span>
        </label>
        <label>
          <select
            name="role"
            id=""
            value={formData.role}
            className="input"
            onChange={handleChange}
          >
            <option value="Select">Select</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
          <span>Role</span>
        </label>
        <button className="submit">Submit</button>
      </form>
      {data &&
        data.map((e, i) => (
          <div key={i}>
            <div
              style={{
                display: "flex",
                margin: "auto",
                alignItems: "center",
                gap: "10px",
                justifyContent: "center",
              }}
            >
              <h1>{e.title}</h1>
              <MdDelete
                style={{ fontSize: "25px" }}
                onClick={()=>deleteData(e._id)}
              />
            </div>
            <div>
              {e.options.map((e1, i) => (
                <h2 key={i}>{e1.option}</h2>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Register;
