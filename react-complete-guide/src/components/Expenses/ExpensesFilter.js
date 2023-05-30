import React from 'react';

import './ExpensesFilter.css'

const ExpensesFilter = (props) => {
    const selectHandler = (e) => {
        props.onchangeFilter(e.target.value);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__font'>Filter by year</div>
            <select onChange={selectHandler}>
                <option value='2021'>2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
            </select>
        </div>
    )
}

export default ExpensesFilter