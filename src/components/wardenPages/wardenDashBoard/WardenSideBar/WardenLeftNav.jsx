import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { SignOut } from '../../../../actions/authentication';
import './WardenLeftNav.css';
const Ul = styled.ul`
  list-style: none;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100%;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;
const WardenLeftNav = ({open}) => {
  return (
    <>
      <Ul open={open}>
        <li>
          <Link to="/wardenDashBoard" id="menu-list">
            <i className="fa fa-home" aria-hidden="true"></i>
            <span>Send Reports</span>
          </Link>
        </li>
        <li>
          <Link to="/warden/reports" id="menu-list">
            <i className="fa fa-user" aria-hidden="true"></i>
            <span>All Reports</span>
          </Link>
        </li>
        <li>
          <Link to="/warden/edit-report" id="menu-list">
            <i className="fa fa-id-card" aria-hidden="true"></i>
            <span>Edit Reports</span>
          </Link>
        </li>
        <li>
          <Link to="/wardenLogin" onClick={ SignOut }><i className="fa fa-window-close" aria-hidden="true"></i><span>Log Out</span></Link>
        </li>
      </Ul>
    </>
  );
};

export default WardenLeftNav;
