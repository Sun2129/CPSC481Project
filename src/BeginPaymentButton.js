import React, {Component} from 'react';
import {updateCardDialog, updateCashDialog, removeTime, setTimeID} from './Variables.js';

class DisplayBeginPayment extends Component{
	
	
	render(){
		let dialog = (
			<div className="overlay">
				<div className="GasDialog" id="GasDialog">
					<button className="X_Button" onClick={() => {updateCardDialog(false); updateCashDialog(false); this.props.onClose()}}>X</button>
					
					<div className="AddGas_Div">PAYMENT</div>
					<div className="Payment_Div" id="Payment_Div">Select Customer Payment Type</div>
					
					<div className="Payment_Buttons">
						<button className="Cash_Button" onClick={() => {updateCardDialog(false); updateCashDialog(true); this.props.onClose()}}>Cash</button>
						<button className="Card_Button" onClick={() => {updateCardDialog(true); updateCashDialog(false); this.props.onClose()}}>Debit/Credit Card</button>
					</div>
				</div>
			</div>
		);
		
		if(! this.props.isOpen){
			dialog = null;
		}
		
		else{
			updateCardDialog(true);
			updateCashDialog(true);
			return (
				<div>
					{dialog}
				</div>
			);
		}
	}
	
}

export default DisplayBeginPayment;