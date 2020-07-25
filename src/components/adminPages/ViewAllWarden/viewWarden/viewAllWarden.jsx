import React from 'react';
import { Link } from 'react-router-dom';
import './viewAllWarden.css';

const ViewAllWarden = () => {
    return (
        <div className="main-container">
            <Link to="/singleWarden">
                <div className="cards">
                    <p>
                        <span>Name: fortune</span>
                        <span>Location: ota</span>
                        <span>Email: fortune@gmail.com</span>
                    </p>
                </div>
            </Link>
            <Link to="/singleWarden">
                <div className="cards">
                    <p>
                        <span>Name: david</span>
                        <span>Location: mango</span>
                        <span>Email: ore@gmail.com</span>
                    </p>
                </div>
            </Link>
            <Link to="/singleWarden">
                <div className="cards">
                    <p>
                        <span>Name: divine</span>
                        <span>Location: kaduna</span>
                        <span>Email: kite@gmail.com</span>
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default ViewAllWarden;
