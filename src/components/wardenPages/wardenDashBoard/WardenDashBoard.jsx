import React from 'react';
import WardenSideBarAdmin from './WardenSideBar/WardenSideBar';
import WardenBody from './WardenBody/Warden';

 const  WardenDashBoard =() => {
	return (
		<div className="admin">
			<div className="admin-sideBar">
				<WardenSideBarAdmin />
			</div>
			<div className="admin-body">
				<WardenBody />
			</div>
		</div>
	)
}
export default WardenDashBoard;