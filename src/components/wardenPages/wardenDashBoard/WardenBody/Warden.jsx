import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { sendReports } from "../../../../actions/report";
import "./Warden.css";
import profileImage from "../../../Images/profile.svg";

const WardenBody = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("adminOrWarden"));
  console.log('>>>>user',  user)
  // if (user !++ ) {
  //   history.push("/login");
  // }
  
  const [error, setError] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      congestionTime: "",
      trafficType: "",
      congestionDetails: "",
      location: "",
    },
    validationSchema: Yup.object({
      trafficType: Yup.string().required("Traffic type can not be empty"),
      congestionTime: Yup.string().required("congestionTime is required"),
      location: Yup.string().required("Location can not be empty"),
      congestionDetails: Yup.string()
        .required("congestionDetails is required")
        .max(100, "congestion details should not be more than 20"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      const user = await sendReports(values);
      const { status, message, data } = user;

      if (status === 201) {
        setTimeout(() => alert("User success"), 2000);
        return history.push("/wardenDashboard");
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
      <div className="wrapperWarden">
        <div className="header">
          <img src={profileImage} alt="not showing" />
          <h1>Today Traffic</h1>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div>
              <form onSubmit={formik.handleSubmit}>
                {error ? <div className="error">{alertMessage} </div> : ""}
                <div className="col form-group">
                  <label htmlFor="CongestionTime">CongestionTime</label>
                  {formik.touched.congestionTime &&
                  formik.errors.congestionTime ? (
                    <div className="input-error mt-1 pl-3">
                      {formik.errors.congestionTime}
                    </div>
                  ) : null}
                  <input
                    type="text"
                    id="inputCongestionTime"
                    className="form-control"
                    placeholder="Time that the congestion started"
                    {...formik.getFieldProps("congestionTime")}
                  />
                </div>
                <div className="col form-group">
                  <label htmlFor="trafficType">TrafficTypes</label>
                  {formik.touched.traffic && formik.errors.trafficType ? (
                    <div className="input-error mt-1 pl-3">
                      {formik.errors.trafficType}
                    </div>
                  ) : null}
                  <select
                    id="confirmationType"
                    className="form-control"
                    {...formik.getFieldProps("trafficType")}
                  >
                    <option>Select cause of traffic</option>
                    <option value="road block">road block</option>
                    <option value="road accident">road accident</option>
                    <option value="road maintenance">road maintenance</option>
                    <option value="vip movement">vip movement</option>
                  </select>
                </div>
                <div className="col form-group">
                  <label htmlFor="CongestionDetails">CongestionDetails</label>
                  {formik.touched.congestionDetails &&
                  formik.errors.congestionDetails ? (
                    <div className="input-error mt-1 pl-3">
                      {formik.errors.congestionDetails}
                    </div>
                  ) : null}
                  <textarea
                    type="text"
                    id="inputCongestionTime"
                    className="form-control"
                    placeholder="Explain for better understanding"
                    {...formik.getFieldProps("congestionDetails")}
                  />
                </div>
                <div className="col form-group">
                  <label htmlFor="Location">Location</label>
                  {formik.touched.location && formik.errors.location ? (
                    <div className="input-error mt-1 pl-3">
                      {formik.errors.location}
                    </div>
                  ) : null}
                  <input
                    type="text"
                    id="location"
                    className="form-control"
                    placeholder="example: express Road,Punjab 54000"
                    {...formik.getFieldProps("location")}
                  />
                </div>
                <div className="col form-group">
                  <button
                    className="btn login mb-2"
                    id="btn-donate"
                    type="submit"
                  >
                    Send Reports
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

export default WardenBody;
