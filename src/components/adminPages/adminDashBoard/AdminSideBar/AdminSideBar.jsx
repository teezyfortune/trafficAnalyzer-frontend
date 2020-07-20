import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import "./AdminSideBar.css";
import Burger from "./Burger";
// import { SignOut, updateUser } from '../../../api/auth';

const SideBarAdmin = () => {
  const history = useHistory();
  const [error, setError] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  return (
    <div className="sidebar">
      <center>
        {error ? <div className="error">{alertMessage} </div> : ""}
      </center>
      <Burger />
    </div>
  );
};

export default SideBarAdmin;
