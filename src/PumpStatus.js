import React from 'react';
import {Pump_1, Pump_2, Pump_3, Pump_4, Pump_5, Pump_6, Pump_1_color, Pump_2_color, Pump_3_color, Pump_4_color, Pump_5_color, Pump_6_color} from "./Variables.js";

function PumpStatus() {
    const pumps = [
        { number: 1, status: Pump_1, color: Pump_1_color },
        { number: 4, status: Pump_4, color: Pump_4_color },
        { number: 2, status: Pump_2, color: Pump_2_color },
        { number: 5, status: Pump_5, color: Pump_5_color },
        { number: 3, status: Pump_3, color: Pump_3_color },
        { number: 6, status: Pump_6, color: Pump_6_color },
    ];

    return (
        <div className="pumpstatus">
            <h2>Pump Status</h2>
			<hr class="rounded"></hr>
            <div className="pumps-group">
                {pumps.map(pump => (
                    <div key={pump.number} className="pump">
                        Pump #{pump.number}
                        <span className="status-circle" style={{ backgroundColor: pump.color }}></span>
                        - {pump.status}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PumpStatus;
