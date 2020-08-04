import React from 'react'
import SideBarAdmin from '../../adminDashBoard/AdminSideBar/AdminSideBar';
import { FetchWardenPage } from './AllReportWarden/wardens';
import './AllReportLandingPage.css';

const AllWardenReports = () => {
    return (
        <div className="allWarden">
            <SideBarAdmin />,
            <FetchWardenPage />
        </div>
    )
}

export default AllWardenReports;
