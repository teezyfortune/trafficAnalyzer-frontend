import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../../actions/authentication";
import "./adminLogin.css";
import profileImage from '../../Images/profile.svg';

const LoginPage = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("adminOrwarden"));
  if (user) {
    history.push("/adminDashBoard");
  }
  const [error, setError] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),
      password: Yup.string()
        .required("password is required")
        .min(6, "password must be minimum of 6 characters")
        .matches(/(?=.*[0-9])/, "Password must contain a number."),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      const user = await loginUser(values);
      const { status, message, data } = user;
      // console.log('>>>>>>>>>>user', data);

      if (status === 201) {
        localStorage.setItem("adminOrWarden", JSON.stringify(data));
        return history.push("/adminDashBoard");
      }
      setTimeout(() => {
        setError(true);
        setAlertMessage(message);
        setSubmitting(false);
      }, 401);
    },
  });

  return (
    <div className="main-wrapper">
      <div className="wrapper">
        <div className="header">
            <img src={ profileImage } alt="not showing" />
          <h1>Admin</h1>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div>
              <form onSubmit={formik.handleSubmit}>
                {error ? <div className="error">{alertMessage} </div> : ""}
                <div className="col form-group">
                  {formik.touched.email && formik.errors.email ? (
                    <div className="input-error mt-1 pl-3">
                      {formik.errors.email}
                    </div>
                  ) : null}
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    {...formik.getFieldProps("email")}
                  ></input>
                </div>
                <div className="col form-group">
                  {formik.touched.password && formik.errors.password ? (
                    <div className="input-error mt-1 pl-3">
                      {formik.errors.password}
                    </div>
                  ) : null}
                  <input
                    type="Password"
                    className="form-control"
                    placeholder="password"
                    {...formik.getFieldProps("password")}
                  ></input>
                </div>
                <div className="col form-group">
                  <button
                    className="btn login mb-2"
                    id="btn-donate"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
