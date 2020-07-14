import React from 'react'

export const sideBar = () => {
	return (
		<div>
		<ul className="sidebar navbar-nav">
		<li className="nav-item active">
			<a className="nav-link" href="index.html">
				<i className="fas fa-fw fa-tachometer-alt"></i>
				<span>Admin Management</span>
			</a>
		</li>
		<li className="nav-item ">
			<a className="nav-link " href="#" id="pagesDropdown" role="button"  aria-haspopup="true" aria-expanded="false">
				<i className="fas fa-fw fa-folder"></i>
				<span>Warden Management</span>
			</a>
			
		</li>
		<li className="nav-item ">
			<a className="nav-link " href="#" id="pagesDropdown" role="button"  aria-haspopup="true" aria-expanded="false">
				<i className="fas fa-fw fa-folder"></i>
				<span>User Management</span>
			</a>
		</li>
	</ul>
</div>
	)
}
