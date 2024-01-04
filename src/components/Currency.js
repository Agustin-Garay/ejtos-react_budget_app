import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {dispatch} = useContext(AppContext);
    const currChange = (event) => {
        dispatch({
            type: "CHG_CURRENCY",
            payload: event.target.value,
        })
    }
    return (
        <div className='alert alert-secondary'>
            <label>Currency</label>
            <select className="custom-select" id="inputCurrency" onChange={currChange}>
                <option value="$">$ Dollar</option>
                <option defaultValue value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>
    )
}

export default Currency;
