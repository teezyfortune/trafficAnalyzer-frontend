import React from 'react'
import SideBarAdmin from '../../adminDashBoard/AdminSideBar/AdminSideBar';
import { ViewReportWarden } from './SingleReportWarden/viewReportWarden';
import './SingleReportHome.css';

const SingleReportHomeAdmin = () => {
    return (
        <div className="allWarden">
            <SideBarAdmin />,
            <ViewReportWarden />
        </div>
    )
}

export default SingleReportHomeAdmin;
