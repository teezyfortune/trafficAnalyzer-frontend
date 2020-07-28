import React from 'react'
import SideBarAdmin from '../../adminDashBoard/AdminSideBar/AdminSideBar';
import  { GetReportPage }  from './AllReportWarden/wardenReports';
import './AllReportWardenPage.css';

const AdminAllWardenReportPage = () => {
    return (
        <div className="allWardenReport">
            <SideBarAdmin />,
            <GetReportPage />
        </div>
    )
}

export default AdminAllWardenReportPage;
