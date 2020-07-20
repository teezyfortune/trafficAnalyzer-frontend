import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import './AdminLeftNav.css';
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
const AdminLeftNav = ({open}) => {
  return (
    <>
      <Ul open={open}>
        <li>
          <Link to="/adminDashBoard" id="menu-list">
            <i className="fa fa-home" aria-hidden="true"></i>
            <span>Add Warden</span>
          </Link>
        </li>
        <li>
          <Link to="/adminDashBoard" id="menu-list">
            <i className="fa fa-user" aria-hidden="true"></i>
            <span>All Reports</span>
          </Link>
        </li>
        <li>
          <Link to="/adminDashBoard" id="menu-list">
            <i className="fa fa-id-card" aria-hidden="true"></i>
            <span>All Traffic Warden</span>
          </Link>
        </li>
      </Ul>
    </>
  );
};

export default AdminLeftNav;
