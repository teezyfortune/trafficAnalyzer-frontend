import React, { useState, useEffect } from "react";
import { getAllReports } from "../../../../../actions/report";
import { useHistory, Link } from "react-router-dom";
import "./wardenReport.css";

export const GetReportPage = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("adminOrWarden"));
  if (user.userType !== "admin") {
    history.push("/");
  }
  const [reports, fetchReports] = useState([]);

  useEffect(() => {
    const fetAllReports = async () => {
      try {
        const report = await getAllReports();
        const { data } = report;

        fetchReports(data);
      } catch (err) {
        return err;
      }
    };
    fetAllReports();
  }, []);
  return (
    <div>
      <h1 className="text-center">All Wardens Reports</h1>
      <div className="all-report-warden">
        {reports && reports.status === 404 ? (
          <div
            className="nnn"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {reports && reports.message}{" "}
          </div>
        ) : (
          reports.map((locate, index) => (
            <div className="all-cards-warden">
              <div className="new" style={{ margin: "4rem", fontSize: "25px" }}>
                <div key={locate.userId}>{locate.location}</div>
                <div>{locate.congestionTime}</div>
                <Link className="btn btn-info" to={`/reports/${locate._id}`}>
                  view Details
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
