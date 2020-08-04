import React from 'react';
import SideBarAdmin from './AdminSideBar/AdminSideBar';
import AdminBody from './AdminBody/AdminBody';

 const  AdminDashBoard =() => {
	return (
		<div className="admin">
			<div className="admin-sideBar">
				<SideBarAdmin />
			</div>
			<div className="admin-body">
				<AdminBody />
			</div>
		</div>
	)
}
export default AdminDashBoard;