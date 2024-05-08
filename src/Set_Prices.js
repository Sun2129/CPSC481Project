import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './App_2.css';
import {useState} from 'react';
import { inventory, categories, setItem_X, inv_P } from './Variables';
import Sidebars from './Sidebars';
import PopUp from './PopUpSetPrices';

function useItemStates(initialValue) {
    const [state, setState] = useState(initialValue);
  
    return { state, setState };
  }

const initializeItemStates = (inventory) => {
    const itemStates = {};
    inventory.forEach(item => {
        itemStates[`price_${item.name.toLowerCase().replace(' ', '_')}`] = useItemStates(NaN);
    });
    return itemStates;
    };

function Update_Set_Prices() {

    const [firstState, setFirstState] = useState(false);
    const itemStates = initializeItemStates(inventory);
    const [selectedCategory, setSelectedCategory] = useState(categories);
    
    const Refresh = () => {
        setFirstState(false);
        Object.entries(itemStates).forEach(([key, { setState }]) => {
            const itemName = key.replace(/^price_/, '').replace(/_/g, ' ');
            setState(NaN);
            setItem_X(itemName, NaN);
          });
        setSelectedCategory(categories);
        };

    const Final_Call = () => {
        setFirstState(true);
        Object.entries(itemStates).forEach(([key, { state }]) => {
            const itemName = key.replace(/^price_/, '').replace(/_/g, ' ');
            setItem_X(itemName, state);
          });
        };

    const handleChangeCategory = (event) => {
      if (event.target.value == "View All") {
        setSelectedCategory(categories);
      }
      else {
        setSelectedCategory([event.target.value]);
      }
      };

    const handleChangeItem = (itemName, inputVal) => {
        const varItemName = `price_${itemName.replace(/ /g, '_')}`;
        const { state, setState } = itemStates[varItemName];
        const floats = inputVal.target.value;

        const float = /^\d+(\.\d{0,2})?$/.test(floats) ? parseFloat(floats) : (floats === "" ? NaN : state);
        setState(float);
        setItem_X(itemName, float);
      };

  return (
    <div className="Inventory_Page" style={{width:"100%", height:"100%", position:"absolute", overflowX:"hidden"}}>
    <Sidebars />
    <div className="corner">Set Prices</div>
    {/* <div className='search'><input type="text" name="name" /></div> */}
    <div className="Inv_Div">
        <select className="invDropdown" value={categories.every(item => selectedCategory.includes(item)) ? 'View All' : selectedCategory[0]} onChange={handleChangeCategory}>
          <option value="View All">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
        <br></br>
			  {selectedCategory.map(category => (
				<React.Fragment key={category}>
				  <div className="invHeader">
					<h1 style={{color:"white"}}>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
				  </div>
				  <div className="cards" style={{width:"100%"}}>
						  {inventory.filter(item => item.category === category).map(item => (
					<div className="inv_card" key={item.name}>
					  <img src={item.img} alt="Avatar" style={{width: "100%"}}></img>
					  <div className="cardcontainer">
						  <h4><b>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</b></h4>
						  <p>Price: ${item.price.toFixed(2)}</p>
						  <input className="invText" type="number" onChange={(e) => handleChangeItem(item.name, e)} value={itemStates[`price_${item.name.replace(' ', '_')}`].state} />
					  </div>
					</div>
							))}
				  </div>
				</React.Fragment>
			  ))}
	</div>

	<div className="InventoryGroup">
			<button className='dashboard-button' onClick={Final_Call} style={{border:'2px solid black'}}>Review and Submit</button>
	</div>
	
	{firstState && (
	  <PopUp isOpen={firstState} onClose={Refresh}></PopUp>
	)} 

	  </div>

);
}


export default Update_Set_Prices;