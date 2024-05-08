import React from 'react';
import PumpStatus from './PumpStatus';
import Sidebars from './Sidebars';
import {Link} from 'react-router-dom';

function Dashboard() {
    return (
		<body style={{width:"100%", height:"100%", backgroundImage: "url('/dashboard_bg2.jpg')", backgroundSize:"cover", position:"absolute", overflowX:"hidden"}}>
            <Sidebars/>
                        <div>
                <div className="dashboard">
                    <div className="Fuel_Management">Dashboard</div>
                    <div className="buttons-group">
                        <Link to="/FuelManagment_Page" className='dashboard-button' style={{border:'2px solid black'}}>
                            <button className='dashboard-button'>Fuel Management</button>
                        </Link> 
                        <Link to="/InventoryManagment_Page" className='dashboard-button' style={{border:'2px solid black'}}>
                            <button className='dashboard-button'>Inventory Management</button>
                        </Link>
                        <Link to="/PumpManagement" className='dashboard-button' style={{border:'2px solid black'}}>
                            <button className='dashboard-button'>Pump Management</button>
                        </Link>
                    </div>
                    <div className="buttons-group">
                        <Link to="/Promotions" className='dashboard-button' style={{border:'2px solid black'}}>
                            <button className='dashboard-button'>Promotions & Coupons</button>
                        </Link>
                        <Link to="/App" className='dashboard-button' style={{border:'2px solid black'}}>
                            <button className='dashboard-button'>Checkout</button>
                        </Link>
                    </div>
                </div>
            </div>
			<div className='dashboard'>
                <PumpStatus />
            </div>
        </body>
    );
}

export default Dashboard;
