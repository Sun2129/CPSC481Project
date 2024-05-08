import React from 'react'
import {useState} from 'react';
import { ReactDialogBox } from 'react-js-dialog-box'
import 'react-js-dialog-box/dist/index.css'
import { itemStates } from './Update_Inventory.js'; 
import { inventory, inv_P, UpdateInventory } from "./Variables.js";
import './App_2.css';

import Chart from 'chart.js/auto';

class PopUp extends React.Component {

  
    ChangeStatus = (event) => {
      
  this.props.onClose();
  
  };
  
  handleClick = (event) => {
		UpdateInventory();
		this.props.onClose();
  };
  
    render() {
		const itemsWithQty = inv_P.filter(item => item.qty != 0);
      return (
		<div>
			<form onSubmit={this.handleClick}>
				<div className="overlay">
					<div className="FuelDialog">
						<div className="AddGas_Div">REVIEW AND SUBMIT</div>
						<div className="OrderTableDiv" style={{overflow:"auto"}}>
							<table className="Order_Table">
								<thead className="HeaderRow">
									<th>Item</th>
									<th>Quantity</th>
								</thead>
								<tbody>
									{itemsWithQty.map(item => (
										<tr key={item['name']}>
											<th>{item['name'].charAt(0).toUpperCase() + item['name'].slice(1)}</th>
											<th>{item['qty']} Units</th>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<div className="Complete_Cancel_Div_Order">
							<button type="submit" className="Complete">Submit</button>
							<button className="Cancel" onClick={this.props.onClose} style={{marginLeft:"240px"}}>Cancel</button>
						</div>
					</div>
				</div>
			</form>
		</div>
      )
    }
  }
  
  export default PopUp