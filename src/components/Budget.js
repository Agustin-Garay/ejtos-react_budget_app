import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, remaining, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if (event.target.value > 20000) {
            alert("The budget value cannot exceed "+currency+" 20000");
            setNewBudget(20000);
        } else {
            if (event.target.value < budget-remaining) {
                alert("You cannot reduce the budget value lower than the spending");
                setNewBudget(budget-remaining);
            } else {
                setNewBudget(event.target.value);
            }
        }
        dispatch({
            type: "SET_BUDGET",
            payload: newBudget,
        })
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;

