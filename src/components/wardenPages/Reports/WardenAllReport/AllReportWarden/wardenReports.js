import React, { useState, useEffect } from "react";
import { getAllWardenReport } from "../../../../../actions/report";
import { useHistory, Link } from "react-router-dom";
import "./wardenReport.css";

export const WardenReports = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("adminOrWarden"));
  if (user.userType !== "traffic-warden") {
    history.push("/wardenLogin");
  }
  const [reports, fetchReports] = useState([]);
  useEffect(() => {
    const fetAllReports = async () => {
      try {
        const report = await getAllWardenReport();
        fetchReports(report);
      } catch (err) {
        return err;
      }
    };
    fetAllReports();
  }, []);

  return (
    <div>
      <h1 className="text-center">Warden All Report</h1>
      <div className="all-report">
          {reports.status && reports.status === 404 ? (
            <div
              className="nnn"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {reports.message && reports.message}{" "}
            </div>
          ) : (
            reports.data &&
            reports.data.map((locate, index) => (
              <div className="all-cards">
                <div className="new" style={{ margin: "4rem", fontSize: "25px" }}>
                  <div key={locate.userId}>{locate.location}</div>
                  <div>{locate.congestionTime}</div>
                  <Link
                    className="btn btn-info"
                    to={`/warden/report/${locate._id}`}
                  >
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
