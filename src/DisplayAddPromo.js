import React, {Component} from 'react';
import { inventory, categories } from './Variables';

class DisplayAddPromo extends Component{
	constructor(props) {
        super(props);
        this.state = this.getInitialState();
		console.log(this.state);
    }

	componentDidUpdate(prevProps) {
		// Check if the component just received the command to open
		if (!prevProps.isOpen && this.props.isOpen) {
			this.setState(this.getInitialState());
		}
	}

	getInitialState = () => {
        return {
            name: '',
            type_selection: '',
            item: '',
            category: '',
            num_items: '',
            discount_selection: '',
            discount_off: '',
            num_discount: '',
            start: '',
            end: ''
        };
    }

	handleTypeChange = (event) => {
        this.setState({ type_selection: event.target.value });
    }

	handleDiscountChange = (event) => {
        this.setState({ discount_selection: event.target.value });
    }

	handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

	handleSubmit = (event) => {
        event.preventDefault();

		if (this.state.num_items < 0) {
			alert("Number of items bought cannot be less than 0.");
			return; // Prevent form submission
		}

		if (this.state.discount_off < 0) {
			alert(`The ${this.state.discount_selection} off cannot be less than 0`);
			return; // Prevent form submission
		}

		if (this.state.num_discount < 0) {
			alert("Number of items discounted cannot be less than 0.");
			return; // Prevent form submission
		}

		if (this.state.end < this.state.start) {
			alert("End date must be greater than start date.");
			return; // Prevent form submission
		}

        const newPromo = {
            name: this.state.name,
            type: this.state.type_selection,
            item: this.state.type_selection === 'item' ? this.state.item : '',
            category: this.state.type_selection === 'category' ? this.state.category : '',
            num_items: parseInt(this.state.num_items),
            discount_type: this.state.discount_selection,
            discount_off: parseFloat(this.state.discount_off),
            num_discount: parseInt(this.state.num_discount),
            start: this.state.start,
            end: this.state.end
        };
		
        this.props.onAddPromo(newPromo); // Call the passed callback function with new promo
        this.props.onClose(); // Close the form/modal after adding
    }

	
	render(){
		const { type_selection } = this.state;
		const { discount_selection } = this.state;

		let dialog = (
			<div>
			{this.props.isOpen && (
				<div className="overlay">
					<form onSubmit={this.handleSubmit}>
						<div className="GasDialog">						
							<div className="AddGas_Div">ADD PROMO</div>
							<div className="Pump_Div">
								<div className="Pump_label">Select Type</div>
								<div className="Gas_Selection">
									<div className="RegularDiv">
										<label for="name">Promo Name:</label>
										<input id="name" name="name" placeholder="ex: buy 8 get 3" value={this.state.name} onChange={this.handleInputChange} style={{marginLeft: '10px'}} required/>
									</div>					
								</div>
								<div className="Gas_Selection" style={{maxWidth: '30%'}}>
									<div className='pump1Div'>
										Select Promo Type: 
									</div>
									<div className="pump1Div">
										<input type="radio" id="item" name="type" checked={type_selection === 'item'} value="item" onChange={this.handleTypeChange} required/>
										<label for="item">Item</label>
									</div>
									<div className="pump2Div">
										<input type="radio" id="category" name="type" checked={type_selection === 'category'} value="category" onChange={this.handleTypeChange} required/>
										<label for="category">Category</label>
									</div>
								</div>

								{type_selection === 'item' && (
										<div className='Gas_Selection'>
											<div className="RegularDiv">
												<label htmlFor="itemSelect">Select Item:</label>
												<select id="itemSelect" value={this.state.item} name="item" onChange={this.handleInputChange} placeholder='Select Item' required>
													<option value="" disabled selected>Select Item</option>
													{inventory.map(inventory => (
														<option value={inventory.name}>
															{inventory.name}
														</option>
													))}
												</select>
											</div>			
										</div>
								)}

								{type_selection === 'category' && (
									<div className='Gas_Selection'>
										<div className="RegularDiv">
												<label htmlFor="categorySelect">Select Category</label>
												<select id="categorySelect" name="category" value={this.state.category} onChange={this.handleInputChange} placeholder='Select Category' required>
													<option value="" disabled selected>Select Category</option>
													{categories.map(category => (
															<option value={category}>
																{category}
															</option>
														))}
												</select>
											</div>		
									</div>
								)}

								<div className="Gas_Selection">
									<div className="RegularDiv">
										<label for="num_items">Number of items bought:</label>
										<input type="number" id="num_items" name="num_items" placeholder="ex: 3" value={this.state.num_items} onChange={this.handleInputChange} style={{marginLeft: '10px'}} required/>
									</div>					
								</div>

							</div>
								
							<div className="Gas_Div">	
								<div className="Gas_Label">Discount</div>
								<div className="Gas_Selection" style={{maxWidth: '30%'}}>
									<div className="RegularDiv">
										Select Discount Type:
									</div>
									<div className="RegularDiv">
										<input type="radio" id="percent" name="discount_type" checked={discount_selection === 'percent'} onChange={this.handleDiscountChange} value="percent" required/>
										<label for="percent">Percentage</label>
									</div>
									
									<div className="PremiumDiv">
										<input type="radio" id="amount" name="discount_type" value="amount" checked={discount_selection === 'amount'} onChange={this.handleDiscountChange} required/>
										<label for="amount">Amount</label>
									</div>							
								</div>

								{discount_selection === 'percent' && (
										<div className='Gas_Selection'>
											<div className="RegularDiv">
											<label for="discount_off">Percentage Off:</label>
											<input type="number" id="discount_off" name="discount_off" placeholder="ex: 25" onChange={this.handleInputChange} value={this.state.discount_off} style={{marginLeft: '10px'}} required/>
											</div>			
										</div>
									)}

								{discount_selection === 'amount' && (
									<div className='Gas_Selection'>
										<div className="RegularDiv">
											<label for="discount_off">Amount Off:</label>
											<input type="number" id="discount_off" name="discount_off" placeholder="ex: 25" onChange={this.handleInputChange} value={this.state.discount_off} style={{marginLeft: '10px'}} required/>
											</div>		
									</div>
								)}

								<div className="Gas_Selection">
									<div className="RegularDiv">
										<label for="num_discount">Number of items discounted:</label>
										<input type="number" id="num_discount" name="num_discount" placeholder="ex: 3" onChange={this.handleInputChange} value={this.state.num_discount} style={{marginLeft: '10px'}} required/>
									</div>					
								</div>
								<div className="Gas_Selection">
									<div className="RegularDiv">
										<label for="start">Start Date:</label>
										<input id="start" name="start" type="date" onChange={this.handleInputChange} value={this.state.start} style={{marginLeft: '10px'}} required/>
									</div>					
								</div>
								<div className="Gas_Selection">
									<div className="RegularDiv">
										<label for="end">End Date:</label>
										<input type="date" id="end" name="end" onChange={this.handleInputChange} value={this.state.end} style={{marginLeft: '10px'}} required/>
									</div>					
								</div>
							</div>

							<div className="Complete_Cancel_Div">
								<button type="submit" className="Complete">Submit</button>
								<button className="Cancel" onClick={this.props.onClose}>Cancel</button>
							</div>
						</div>
					</form>
				</div>
			)}
			</div>
		);
		
		if(! this.props.isOpen){
			dialog = null;
		}
		
		else{
			return (
				<div>
					{dialog}
				</div>
			);
		}
	}
	
}

export default DisplayAddPromo;