import React, { useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { addWarden } from "../../../../actions/authentication";
import "./AdminBody.css";
import profileImage from '../../../Images/profile.svg';

toast.configure();

const Notify = (status, message) => {
  if(status === 201) {
    toast.success(`${message}`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 8000
    });
  }
  if(status > 300){
    toast.error(`${message}`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 8000
    });
  }
}
const AdminBody = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("adminOrWarden"));
  if (!user) {
		history.push('/')
  }
  const phoneRegex = RegExp(
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  );

  const [error, setError] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [notify, setNotify] = useState("");

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      city: "",
      country: "",
      userType:'traffic-warden',
      Gender: "",
      password: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("fullName can not be empty"),
      email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),
      phone: Yup.string()
        .required("Phone is required")
        .max(15, "phone number is too long")
        .matches(phoneRegex, "Invalid phone"),
      city: Yup.string().required("City can not be empty"),
      country: Yup.string().required("Country can not be empty"),
      Gender: Yup.string().required("Gender can not be empty"),
      password: Yup.string()
        .required("password is required")
        .min(6, "password must be minimum of 6 characters")
        .matches(/(?=.*[0-9])/, "Password must contain a number."),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const user = await addWarden(values);
      const { status, message } = user;

      if (status === 201) {
        setNotify(Notify(status, message));
        resetForm({ values: '' });
        return history.push("/adminDashBoard");
      }
      setTimeout(() => {
        setError(true);
        setAlertMessage(message);
        setNotify(Notify(status, message));
        setSubmitting(false);
      }, 401);
    },
  });

  return (
    <div className="main-wrapper">
      <div className="wrapperSignUp">
        <div className="header">
            <img src={ profileImage } alt="not showing" />
          <h1>Add New Warden</h1>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div>
              <form onSubmit={formik.handleSubmit}>
                {error ? <div className="error">{alertMessage} </div> : ""}
                <div className="col form-group">
                  {formik.touched.fullName && formik.errors.fullName ? (
                    <div className="input-error mt-1 pl-3">
                      {formik.errors.fullName}
                    </div>
                  ) : null}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    name="fullName"
                    {...formik.getFieldProps("fullName")}
                  ></input>
                </div>
                <div className="col form-group">
                  {formik.touched.phone && formik.errors.phone ? (
                    <div className="input-error mt-1 pl-3">
                      {formik.errors.phone}
                    </div>
                  ) : null}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                    name="phone"
                    {...formik.getFieldProps("phone")}
                  ></input>
                </div>
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
                  {formik.touched.Gender && formik.errors.Gender ? (
                    <div className="input-error mt-1 pl-3">
                      {formik.errors.Gender}
                    </div>
                  ) : null}
                  <label className="form-check form-check-inline">Gender</label>
                  <select
                    id="inputGender"
                    className="form-control"
                    {...formik.getFieldProps("Gender")}
                  >
                    <option defaultValue>Gender</option> 
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className="col form-group">
                  {formik.touched.city && formik.errors.city ? (
                    <div className="input-error mt-1 pl-3">
                      {formik.errors.city}
                    </div>
                  ) : null}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                    name="city"
                    {...formik.getFieldProps("city")}
                  ></input>
                </div>
                <div className="col form-group">
                  {formik.touched.country && formik.errors.country ? (
                    <div className="input-error mt-1 pl-3">
                      {formik.errors.country}
                    </div>
                  ) : null}
                  <select
                    id="inputState"
                    className="form-control"
                    {...formik.getFieldProps("country")}
                  >
                    <option defaultValue>Country</option>
                    <option>Pakistan</option>
                  </select>
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
                    Add
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

export default AdminBody;
