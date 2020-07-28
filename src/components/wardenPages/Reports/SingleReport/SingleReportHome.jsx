import React from 'react'
import WardenSideBarAdmin from '../../wardenDashBoard/WardenSideBar/WardenSideBar';
import { ViewReportWarden } from './SingleReportWarden/viewReportWarden';
import './SingleReportHome.css';

const SingleReportHome = () => {
    return (
        <div className="allWarden">
            <WardenSideBarAdmin />,
            <ViewReportWarden />
        </div>
    )
}

export default SingleReportHome;
