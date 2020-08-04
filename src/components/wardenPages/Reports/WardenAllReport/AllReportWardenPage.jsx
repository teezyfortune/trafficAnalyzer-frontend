import React from 'react'
import WardenSideBarAdmin from '../../wardenDashBoard/WardenSideBar/WardenSideBar';
import  { WardenReports }  from './AllReportWarden/wardenReports';
import './AllReportWardenPage.css';

const AllWardenReportPage = () => {
    return (
        <div className="allWarden">
            <WardenSideBarAdmin />,
            <WardenReports />
        </div>
    )
}

export default AllWardenReportPage;
