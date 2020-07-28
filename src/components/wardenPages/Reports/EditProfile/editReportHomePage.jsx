import React from 'react'
import WardenSideBarAdmin from '../../wardenDashBoard/WardenSideBar/WardenSideBar';
import { EditReport } from './editProfile/editReportWarden';
import './editReportHomePage.css';

const EditReportHome = () => {
    return (
        <div className="editWarden">
            <WardenSideBarAdmin />,
            <EditReport />
        </div>
    )
}

export default EditReportHome;
