import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { editWardenReport } from "../../../../../actions/report";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import "./editReportWarden.css";

toast.configure();

const UpdateReportNotify = (status, message) => {
  if (status === 200) {
    toast.success(`${message}`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 8000,
    });
  }
  if (status > 300) {
    toast.error(`${message}`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 8000,
    });
  }
};
export const EditReport = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("adminOrWarden"));
  if (user.userType !== "traffic-warden") {
    history.push("/wardenLogin");
  }
  const [error, setError] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [notify, setNotify] = useState("");

  const formik = useFormik({
    initialValues: {
      congestionTime: "",
      trafficType: "",
      congestionDetails: "",
    },
    validationSchema: Yup.object({
      trafficType: Yup.string(),
      congestionTime: Yup.string().required("congestionTime is required"),
      location: Yup.string(),
      congestionDetails: Yup.string(),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const report = await editWardenReport(values);
      const { status, message } = report;
      console.log(message);
      if (status === 200) {
        setNotify(UpdateReportNotify(status, message));
        resetForm({ values: " " });
        return history.push("/wardenDashboard");
      }
      setTimeout(() => {
        setError(true);
        setAlertMessage(message);
        setNotify(UpdateReportNotify(status, message));
        setSubmitting(false);
      }, 401);
    },
  });

   return (
	<div className="main-wrapper">
	  <div className="wrapperWarden">
		<div className="header">
		  <h1>Update Traffic</h1>
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
