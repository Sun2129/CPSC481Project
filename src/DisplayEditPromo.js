import React, {Component} from 'react';
import {promos, inventory, categories, overwritePromos} from './Variables'

class DisplayEditPromo extends Component{
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
			og_name: '',
            name: '',
            type: '',
            item: '',
            category: '',
            num_items: '',
            discount_type: '',
            discount_off: '',
            num_discount: '',
            start: '',
            end: ''
        };
    }


	handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

	deletePromo = (event) => {
		const updatedPromos = promos.filter(promo => promo.name !== this.state.name);
		overwritePromos(updatedPromos);
		this.props.onDeletePromo(updatedPromos);
		this.props.onClose();
	}

	getPromo = (event) => {
		const { name, value } = event.target;
        this.setState({ [name]: value });

		var i = promos.findIndex((promo => promo.name === value));
		this.setState({
			og_name: value,
			type: promos[i].type,
			item: promos[i].item,
			category: promos[i].category,
			num_items: promos[i].num_items,
			discount_type: promos[i].discount_type,
			discount_off: promos[i].discount_off,
			num_discount: promos[i].num_discount,
			start: promos[i].start,
			end: promos[i].end
		});
		return;
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

		console.log(promos);
		console.log(this.state.og_name);
		var index = promos.findIndex((promo => promo.name === this.state.og_name));
		console.log("HERE " + index);
		let promosCopy = []

		for(var j = 0; j < promos.length; j++){
			promosCopy[j] = promos[j]
		}

		promosCopy[index].name = this.state.name;
		promosCopy[index].type = this.state.type;
		promosCopy[index].item = this.state.category === 'item' ? this.state.item : '';
		promosCopy[index].item = this.state.category === 'category' ? this.state.item : '';
		promosCopy[index].num_items = this.state.num_items;
		promosCopy[index].discount_type = this.state.discount_type;
		promosCopy[index].discount_off = this.state.discount_off;
		promosCopy[index].num_discount = this.state.num_discount;
		promosCopy[index].start = this.state.start;
		promosCopy[index].end = this.state.end;

		overwritePromos(promosCopy);
        this.props.onEditPromo(promosCopy);
        this.props.onClose(); 
    }
	
	render(){

		let dialog = (
			<div className="overlay">
				<form onSubmit={this.handleSubmit}>
					<div className="GasDialog">						
						<div className="AddGas_Div">EDIT PROMO</div>
						<div className="Pump_Div">
							<div className="Pump_label">Promo</div>
                            <div className="Gas_Selection">
                                <div className="RegularDiv">
									<label htmlFor="promoSelect">Select Promo:</label>
									<select id="promoSelect" name="name" value={this.state.name} onChange={this.getPromo} placeholder='Select Promo' required>
										<option value="" disabled selected>Select Promo</option>
										{promos.map(promo => (
											<option value={promo.name}>
												{promo.name}
											</option>
										))}
									</select>
								</div>					
							</div>

							{this.state.name !== '' && (
								<div>
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
											<input type="radio" id="item" name="type" checked={this.state.type === 'item'} value="item" onChange={this.handleInputChange} required/>
											<label for="item">Item</label>
										</div>
										<div className="pump2Div">
											<input type="radio" id="category" name="type" checked={this.state.type === 'category'} value="category" onChange={this.handleInputChange} required/>
											<label for="category">Category</label>
										</div>
									</div>

									{this.state.type === 'item' && (
										<div className='Gas_Selection'>
											<div className="RegularDiv">
												<label htmlFor="itemSelect">Select Item:</label>
												<select id="itemSelect" value={this.state.item} name="item" onChange={this.handleInputChange} placeholder='Select Item' required>
													{inventory.map(inventory => (
														<option value={inventory.name} selected={this.state.item === inventory.name}>
															{inventory.name}
														</option>
													))}
												</select>
											</div>			
										</div>
									)}

									{this.state.type === 'category' && (
										<div className='Gas_Selection'>
											<div className="RegularDiv">
													<label htmlFor="categorySelect">Select Category</label>
													<select id="categorySelect" name="category" value={this.state.category} onChange={this.handleInputChange} placeholder='Select Category' required>
														{categories.map(category => (
																<option value={category} selected={this.state.category === category}>
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
							)}
						</div>

						{this.state.name !== '' && (
							<div className="Gas_Div">	
								<div className="Gas_Label">Discount</div>
								<div className="Gas_Selection" style={{maxWidth: '30%'}}>
									<div className="RegularDiv">
										Select Discount Type:
									</div>
									<div className="RegularDiv">
										<input type="radio" id="percent" name="discount_type" checked={this.state.discount_type === 'percent'} onChange={this.handleInputChange} value="percent" required/>
										<label for="percent">Percentage</label>
									</div>
									
									<div className="PremiumDiv">
										<input type="radio" id="amount" name="discount_type" value="amount" checked={this.state.discount_type === 'amount'} onChange={this.handleInputChange} required/>
										<label for="amount">Amount</label>
									</div>							
								</div>

								{this.state.discount_type === 'percent' && (
										<div className='Gas_Selection'>
											<div className="RegularDiv">
											<label for="discount_off">Percentage Off:</label>
											<input type="number" id="discount_off" name="discount_off" placeholder="ex: 25" onChange={this.handleInputChange} value={this.state.discount_off} style={{marginLeft: '10px'}} required/>
											</div>			
										</div>
									)}

								{this.state.discount_type === 'amount' && (
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

						)}

						<div className="Complete_Cancel_Div">
							<button type="submit" className="Complete">Submit</button>
							<button className="Cancel" onClick={this.deletePromo}>Delete</button>
							<button className="Cancel" onClick={this.props.onClose}>Cancel</button>
						</div>
					</div>
				</form>
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

export default DisplayEditPromo;