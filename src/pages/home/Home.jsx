import React, { useContext, useState } from "react";
import About from "../about/About";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { userData } from "../list/List";

const Home = () => {
  const database = useContext(userData);
  console.log("999999",database)
  const [data, setdata] = useState(false);
  const [value, setvalue] = useState(false);
  const [optionarray, setoptionarray] = useState([{ option: "" }]);
  let location = useLocation();

  console.log("465r7t8y909", data);
  console.log();
  const stateFalse = () => {
    setdata(true);
  };
  console.log(data);

  console.log(location.state);
  console.log("8885555", optionarray);

  const handleClick = () => {
    if (optionarray.length > 3) {
      alert("maximum 4 input field allow");
    } else {
      setoptionarray([...optionarray, { option: "" }]);
    }
  };

  const onHandleChange = (e, i) => {
    const { name, value } = e.target;
    const onhangevalue = [...optionarray];
    onhangevalue[i][name] = value;
    setoptionarray(onhangevalue);
  };
  console.log(optionarray);

  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/">Home</Link>
      <h1>Thsi is a home page</h1>
      <h1>{location.state}</h1>
      <button style={{ cursor: "pointer" }} onClick={() => setvalue(!value)}>
        {!value ? "+" : "-"}
      </button>
      {value && (
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
            placeat nam, perferendis inventore tempora deserunt fugit expedita
            quos ad excepturi id sint nostrum in consectetur possimus modi quis
            distinctio earum soluta, consequatur asperiores exercitationem? Ut
            dignissimos alias quasi. Nesciunt nostrum vero fuga impedit iusto
            et! Eaque inventore nemo commodi ipsa.
          </p>
        </>
      )}
      {""}
      <div>
        {optionarray.map((each, i) => (
          <div key={i}>
            <input
              type="text"
              placeholder="options"
              name="option"
              value={each.option}
              onChange={(e) => onHandleChange(e, i)}
            />
          </div>
        ))}
      </div>
      <button onClick={handleClick}>Add</button>

      <h1>hello :={database}</h1>

      {/* <About value={stateFalse} /> */}
    </div>
  );
};

export default Home;
