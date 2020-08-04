import React from 'react'
import SideBarAdmin from '../../adminDashBoard/AdminSideBar/AdminSideBar';
import { WardenDetails } from './SingleReportWarden/Details';
import './SingleReportLandingPage.css';

const SingleReportWarden = () => {
    return (
        <div className="allWarden">
            <SideBarAdmin />,
            <WardenDetails />
        </div>
    )
}

export default SingleReportWarden;
