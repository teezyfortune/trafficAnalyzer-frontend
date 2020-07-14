import React from 'react';

export default function adminNav() {
	return (
		<div>
		<nav className="navbar navbar-expand navbar-dark bg-dark static-top">
		
		<div className="row" style="width: 100%;">
		 <div className="col-md-6 " >
			 <img src="../logo.jpg" className="logoStyle"></img>
			 <button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
				 <i className="fas fa-bars"></i>
			 </button>
		 </div>
		 <div className="col-lg-3 mt-3" >
				 <a className="navbar-brand mr-1" href="index.html"><h1>Admin Panel</h1></a>
		 </div>
		 <div className="col-lg-3" >
			 <div className="row" style="width: 100%;"> 
	<div className="col-md-4"></div>
	<div className="col-md-4"></div>
							<div className="col-md-4">
								<div style="margin-top: 18px;" style="float: right;">    <input type="button" value="Logout" onClick="location.href='index.html'" className="btn btn-primary">   </input>
	</div></div>
			 </div>
			 </div>
		</div>
	 </nav>
		</div>
	)
}
