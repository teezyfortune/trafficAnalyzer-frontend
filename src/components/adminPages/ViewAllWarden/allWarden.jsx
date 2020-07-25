import React from 'react'
import SideBarAdmin from '../adminDashBoard/AdminSideBar/AdminSideBar';
import ViewAllWarden from './viewWarden/viewAllWarden';
import './allWarden.css';

const AllWarden = () => {
    return (
        <div className="allWarden">
            <SideBarAdmin />,
            <ViewAllWarden />
        </div>
    )
}

export default AllWarden;
