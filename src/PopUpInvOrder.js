import React from 'react'
import {useState} from 'react';
import { ReactDialogBox } from 'react-js-dialog-box'
import 'react-js-dialog-box/dist/index.css'
import { itemStates } from './Order_Inventory.js'; 
import { inventory, inv_P, UpdateInventory } from "./Variables.js";
import './App_2.css';

import Chart from 'chart.js/auto';


class PopUp extends React.Component {

  
    ChangeStatus = (event) => {
		this.props.onClose();
	};
  
    render() {
		const itemsWithQty = inv_P.filter(item => item.qty > 0);
		
		const originalItemsWithQty = inventory.filter(item =>
		  itemsWithQty.some(itemWithQty => itemWithQty.name === item.name)
		);

		const totalCost = itemsWithQty.reduce((acc, item) => {
		  const originalItem = originalItemsWithQty.find(originalItem => originalItem.name === item.name);
		  return acc + item.qty * originalItem.price;
		}, 0);
		
		const tax = 0.05 * totalCost;
		const finalTotal = totalCost + tax;

      return (
          
        <div>
          {/* <div className='div2'>
          <button onClick={this.openBox}>Review and Update </button>
          </div> */}
          <form onSubmit={this.ChangeStatus}>
            <div className="overlay">
				<div className="FuelDialog">
				<div className="AddGas_Div">REVIEW AND SUBMIT</div>
				<div className="OrderTableDiv" style={{overflow:"auto"}}>
					<table className="Order_Table">
						<thead className="HeaderRow">
							<th>Item</th>
							<th>Category</th>
							<th>Cost per Item</th>
							<th>Quantity</th>
							<th>Total</th>
						</thead>
						<tbody>
							{itemsWithQty.map(item => {
								const correspondingInventoryItem = inventory.find(invItem => invItem.name === item.name);
								return(
									<tr key={item['name']}>
										<th>{item['name'].charAt(0).toUpperCase() + item['name'].slice(1)}</th>
										<th>{item['category']}</th>
										<th>${correspondingInventoryItem.price.toFixed(2)}</th>
										<th>{item['qty']} Units</th>
										<th>${((item['qty'] * correspondingInventoryItem.price).toFixed(2))}</th>
									</tr>
								);
							})}
						</tbody>
						
						<thead className="HeaderRow">
							<th></th>
							<th></th>
							<th></th>
							<th>Total</th>
							<th></th>
						</thead>
						<tr>
							<th></th>
							<th></th>
							<th></th>
							<th>Tax:</th>
							<th>${tax.toFixed(2)}</th>
						</tr>
						
						<tr>
							<th></th>
							<th></th>
							<th></th>
							<th>Total:</th>
							<th>${finalTotal.toFixed(2)}</th>
						</tr>
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