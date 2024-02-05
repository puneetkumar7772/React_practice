import React from "react";
import "./formByFormik.css";
import { useFormik } from "formik";
import { Button } from "@mui/material";
import { formDataSchema } from "./schema/validation";

const formData = [
  {
    label: "first name",
    name: "firstname",
    type: "text",
  },
  {
    label: "last name",
    name: "lastname",
    type: "text",
  },
  { label: "email", name: "email", type: "email" },
  {
    label: "password",
    name: "password",
    type: "password",
  },
];

const FormByFormik = () => {
  const onSubmit = (values, action) => {
    console.log(values);
    action.resetForm();
  };

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: formDataSchema,
      onSubmit: onSubmit,
    });

  console.log(errors, touched);
  return (
    <div
      style={{
        width: "50%",
        margin: "auto",
        borderRadius: "15px",
        marginTop: "4%",
        backgroundColor: "#D5F0C1",
      }}
    >
      <h1 style={{ color: "blue", paddingTop: "10px" }}>
        ADD DATA FORM USING FORMIK
      </h1>
      <form action="" style={{ padding: "5%" }} onSubmit={handleSubmit}>
        {formData &&
          formData.map((item, i) => (
          <React.Fragment key={i}>
            <div className="form__group field" key={i}>
              <input
                type={item.type}
                className="form__field"
                name={item.name}
                value={values[item.name]}
                onChange={handleChange}
                onBlur={handleBlur}
                required=""
              />
              <label className="form__label">{item.label}</label>
            </div>
                {errors[item.name] && touched[item.name] ? (
                    <p style={{ color: "red", textAlign: "left" }}>
                      {errors[item.name]}
                    </p>
                  ) : null}</React.Fragment>
          ))}
        {/* {errors.firstname && touched.firstname ? (
          <p style={{ color: "red", textAlign: "left" }}>{errors.firstname}</p>
        ) : null} */}

        {/* <div className="form__group field">
          <input
            type="text"
            className="form__field"
            placeholder="Last Name"
            name="lastname"
            value={values.lastname}
            onChange={handleChange}
            onBlur={handleBlur}
            required=""
          />
          <label className="form__label">Last Name</label>
        </div>
        {errors.lastname && touched.lastname ? (
          <p style={{ color: "red", textAlign: "left" }}>{errors.lastname}</p>
        ) : null}
        <div className="form__group field">
          <input
            type="email"
            className="form__field"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required=""
          />
          <label className="form__label">Email</label>
        </div>
        {errors.email && touched.email ? (
          <p style={{ color: "red", textAlign: "left" }}>{errors.email}</p>
        ) : null}
        <div className="form__group field">
          <input
            type="password"
            className="form__field"
            placeholder="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            required=""
          />
          <label className="form__label">password</label>
        </div>
        {errors.password && touched.password ? (
          <p style={{ color: "red", textAlign: "left" }}>{errors.password}</p>
        ) : null} */}
        <Button
          style={{ marginTop: "20px", width: "45vw", borderRadius: "10px" }}
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FormByFormik;
