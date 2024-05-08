import React from 'react'
import {useState} from 'react';
import { ReactDialogBox } from 'react-js-dialog-box'
import 'react-js-dialog-box/dist/index.css'
import { Octane87_t, Octane89_t, Octane93_t, Diesel_t, Propane_t } from './UpdateFuel.js'; 
import {Octane87, Octane89, Octane93, Diesel, Propane, Octane87_P, Octane89_P, Octane93_P, Diesel_P, Propane_P, UpdateFuel } from "./Variables.js";
import './App_2.css';

import Chart from 'chart.js/auto';

class PopUp extends React.Component {

  
  ChangeStatus = (event) => {
		this.props.onClose();
	};

handleClick = (event) => {
	this.props.onClose()
	UpdateFuel();
};


  render() {
    return (
        
      <div>
        {/* <div className='div2'>
        <button onClick={this.openBox}>Review and Update </button>
        </div> */}
        <form onSubmit={this.handleClick}>
            <div className="overlay">
				<div className="FuelDialog">
				  <div className="AddGas_Div">REVIEW AND SUBMIT</div>
				  <table className="Order_Table">
					<thead className="HeaderRow">
						<th>Fuel</th>
						<th>Quantity</th>
					</thead>
				  <tr>
					<th>Octane 87</th>
					<th> {Octane87_P} Units</th>
				  </tr>
				  <tr>
					<th>Octane 89</th>
					<th> {Octane89_P} Units</th>
				  </tr>
				  <tr>
					<th>Octane 93</th>
					<th> {Octane93_P} Units</th>
				  </tr>
				  <tr>
					<th>Diesel</th>
					<th> {Diesel_P} Units</th>
				  </tr>
				  <tr>
					<th>Propane</th>
					<th> {Propane_P} Units</th>
				  </tr>
				  
				  </table>
				
				<div className="Complete_Cancel_Div_Fuel">
					<button type="submit" className="Complete">Submit</button>
					<button className="Cancel" onClick={this.props.onClose}>Cancel</button>
				</div>
			</div>
			</div>
        </form>
      </div>
    )
  }
}

export default PopUp
