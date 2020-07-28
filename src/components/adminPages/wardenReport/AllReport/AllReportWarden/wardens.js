import React, { useState, useEffect } from "react";
import { FetchAllWarden } from "../../../../../actions/authentication";
import { useHistory, Link } from "react-router-dom";
import './warden.css';

export const FetchWardenPage = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("adminOrWarden"));
  // console.log('>>>>>', user.userType)
  if (user.userType !== "admin") {
    history.push("/");
  }
  const [warden, fetchReports] = useState([]);

  useEffect(() => {
    const fetAllReports = async () => {
      try {
        const wardens = await FetchAllWarden();
        const { data } = wardens;
        fetchReports(data);
      } catch (err) {
        return err;
      }
    };
    fetAllReports();
  }, []);
  // console.log('>>>>>>rep', reports);
  return (
    <div>
      <h1 className="text-center">Reports</h1>
      <div>
        {warden && warden.status === 404 ? (
          <div
            className="nnn"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {warden && warden.message}{" "}
          </div>
        ) : (
          warden.map((warden, index) => (
            <div className="new" style={{ margin: "4rem" }}>
              <div key={warden.userId}>{warden.fullName}</div>
              <div>{warden.city}</div>
              <div>{warden.userType}</div>
              <Link
                className="btn btn-info"
                to={`/admin/wardens/${warden._id}`}
              >
                view Details
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
