import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);
    const [curr, setCurr] = useState(currency);
    return (
        <div>
            <label>Currency</label>
            <Select className="custom-select" id="inputCurrency" onChange={(event) => setCurr(event.target.value)}>
                <Option value="$">$ Dollar</Option>
                <Option defaultValue value="£">£ Pound</Option>
                <Option value="€">€ Euro</Option>
                <Option value="₹">₹ Ruppee</Option>
            </Select>
        </div>
    )
}

export default Currency;
