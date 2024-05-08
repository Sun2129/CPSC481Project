import {React, useState} from 'react';
import PumpStatus from './PumpStatus';
import Sidebars from './Sidebars';
import DisplayEditPump from './DisplayEditPump';
import DisplayTestPump from './DisplayTestPump';
import './PumpStatus.css';

function PumpManagement() {
    const [editPump, setEditPump] = useState(false);
    const [testPump, setTestPump] = useState(false);

    return (
		<body style={{height:"100%", width:"100%", backgroundImage: "url('/dashboard_bg2.jpg')", backgroundSize:"cover", position:"absolute", overflowX:"hidden" }}>
            <Sidebars/>
			<div>
                <div className="dashboard">
                    <div className="Fuel_Management">Pump Management</div>
                    <div className="buttons-group">
                        <button className='dashboard-button-clone' onClick={() => setEditPump(true)}>Edit Pump Status</button>
                        <button className='dashboard-button-clone'>View Cameras</button>
                        <button className='dashboard-button-clone' onClick={() => setTestPump(true)}>Test Pump (Override)</button>
                    </div>     
                    <br></br>                
                    <br></br>                
                    <br></br>                
                </div>
            </div>
			<div className='dashboard'>
                <PumpStatus />
            </div>

            <DisplayEditPump isOpen={editPump} onClose={() => setEditPump(false)}></DisplayEditPump>
            <DisplayTestPump isOpen={testPump} onClose={() => setTestPump(false)}></DisplayTestPump>
        </body>
    );
}

export default PumpManagement;