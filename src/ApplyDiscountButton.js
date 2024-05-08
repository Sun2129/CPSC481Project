import React, {Component} from 'react';
import {updateDiscountDialog, remTime2, setTime2} from './Variables.js';

class DisplayApplyDiscount extends Component{
	render(){
		let dialog = (
			<div className="overlay">
				<div className="GasDialog" id="GasDialog">
					<div className="AddGas_Div">APPLY DISCOUNT</div>
					<div className="Barcode_Div" id="Barcode_Div">Please Scan Barcode
						<div className="Barcode_Gif"></div>
					</div>

					<div className="Discount_Cancel_Div">
						<button className="Cancel_Discount" onClick={() => {updateDiscountDialog(false); this.props.onClose()}}>Cancel</button>
					</div>
				</div>
			</div>
		);
		
		if(! this.props.isOpen){
			dialog = null;
		}
		
		else{
			updateDiscountDialog(true);
			return (
				<div>
					{dialog}
				</div>
			);
		}
	}
	
}

export default DisplayApplyDiscount;