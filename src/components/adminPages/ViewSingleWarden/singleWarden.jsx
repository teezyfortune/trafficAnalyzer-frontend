import React from 'react'
import SideBarAdmin from '../adminDashBoard/AdminSideBar/AdminSideBar';
import ViewSingleWarden from './viewSingleWarden/viewSingleWarden';
import './singleWarden.css';

const SingleWarden = () => {
    return (
        <div className="singleWarden">
            <SideBarAdmin />,
            <ViewSingleWarden />
        </div>
    )
}

export default SingleWarden;
