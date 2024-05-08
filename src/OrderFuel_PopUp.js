import React from 'react'
import {useState} from 'react';
import { ReactDialogBox } from 'react-js-dialog-box'
import 'react-js-dialog-box/dist/index.css'
import { Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t } from './OrderFuel.js'; 
import {Octane87_O, Octane89_O, Octane93_O, Diesel_O, Propane_O} from "./Variables.js";
import './App_2.css';

import Chart from 'chart.js/auto';

class OrderFuel_PopUp extends React.Component {

  
  ChangeStatus = (event) => {
		this.props.onClose();
	};

handleClick = (event) => {
// UpdateFuel();
};


  render() {
	let tax_amount = ((Propane_O*1.3) + (Diesel_O*1.654) + (Octane93_O*1.567) + (Octane87_O*1.299) + (Octane89_O*1.492))*.05
	let total_amount = ((Propane_O*1.3) + (Diesel_O*1.654) + (Octane93_O*1.567) + (Octane87_O*1.299) + (Octane89_O*1.492)) + tax_amount;
	let a = tax_amount.toFixed(2);
	let b = total_amount.toFixed(2);
    return (
        
      <div>
        {/* <div className='div2'>
        <button onClick={this.openBox}>Review and Update </button>
        </div> */}
		
        <form onSubmit={this.ChangeStatus}>
            <div className="overlay">
				<div className="FuelDialog">
					  <div className="AddGas_Div">ORDER AND SUBMIT</div>
					  <table className="Order_Table">
							<thead className="HeaderRow">
								<th>Fuel</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Total Cost</th>
							</thead>
						  <tr>
							<th>Octane 87</th>
							<th>$1.299 per Litre</th>
							<th> {Octane87_O} Units</th>
							<th> ${(Octane87_O*1.299).toFixed(2)}</th>
						  </tr>
						  <tr>
							<th>Octane 89</th>
							<th>$1.492 per Litre</th>
							<th> {Octane89_O} Units</th>
							<th> ${(Octane89_O*1.492).toFixed(2)}</th>
						  </tr>
						  <tr>
							<th>Octane 93</th>
							<th>$1.567 per Litre</th>
							<th> {Octane93_O} Units</th>
							<th> ${(Octane93_O*1.567).toFixed(2)}</th>
						  </tr>
						  <tr>
							<th>Diesel</th>
							<th>$1.654 per Litre</th>
							<th> {Diesel_O} Units</th>
							<th> ${(Diesel_O*1.654).toFixed(2)}</th>
						  </tr>
						  <tr>
							<th>Propane</th>
							<th>$1.30 per Litre</th>
							<th> {Propane_O} Units</th>
							<th> ${(Propane_O*1.3).toFixed(2)}</th>
						  </tr>
						  <thead className="HeaderRow">
								<th></th>
								<th></th>
								<th>Total</th>
								<th></th>
							</thead>
							<tr>
							<th></th>
							<th></th>
							<th> Tax: </th>
							<th> ${a}</th>
						  </tr>

						  <tr>
							<th></th>
							<th></th>
							<th> Total: </th>
							<th> ${b}</th>
						  </tr>

					  </table>
					
					<div className="Complete_Cancel_Div_Order">
						<button type="submit" className="Complete">Submit</button>
						<button className="Cancel" onClick={this.props.onClose} style={{marginLeft:"230px"}}>Cancel</button>
					</div>
				</div>
			</div>
        </form>
      </div>
    )
  }
}

export default OrderFuel_PopUp
