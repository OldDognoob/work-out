import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "..App.css";

import { axiosWithAuth } from "./utils/axiosWithAuth";


const LoginForm = (props) => {
  const [email, setEmail] = useState({
    username: "",
  });

  const [password, setPassword] = useState({
    password: "",
  });
  const emailHandleChange = (event) => {
    setEmail({
      username: event.target.value,
    });
  };
  const passwordHandleChange = (event) => {
    setPassword({
      password: event.target.value,
    });
  };
  const login = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post("/api/auth/login", mergedObjects)

      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })

      .catch((err) => console.log(err));
  };

  return (
    <StyledLogin>
      <div className="login-page">
        <img className="hero-img" src={Hero} alt="gym" />
        <div className="login-rt">
          <img src={LoginLogo} className="login-img" alt="logo" />
          <h1>Login Page</h1>

          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
             
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
            
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="form-field" onSubmit={login}>
                <label htmlFor="email">Email: </label>
                <br />
                <Field
                  className="field-input"
                  id="email"
                  type="email"
                  name="email"
                  value={email.username}
                  onChange={emailHandleChange}
                />
                <br />
                <ErrorMessage name="email" component="div" />
                <label htmlFor="password">Password: </label>
                <br />
                <Field
                  className="field-input"
                  id="password"
                  type="password"
                  name="password"
                  value={password.password}
                  onChange={passwordHandleChange}
                />
                <br />
                <br />
                <ErrorMessage name="password" component="div" />
                <button type="submit" disabled={isSubmitting}>
                  Sign In
                </button>
                <p>or</p>
                <Link to="/signup">
                  <button>Sign Up Here</button>
                </Link>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </StyledLogin>
  );

  export default LoginForm;
};
