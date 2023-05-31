import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css'

const ExpenseList = (props) => {
    if (props.items.length === 0) {
        return <h2 className='expense-list__fallback'>Found No expenses</h2>
    }

    return (
        <ul className="expenses-list">
            {props.items.map((expense, index) => {
                return <div key={index}>
                    <ExpenseItem expense={expense} />
                </div>
            })}
        </ul>
    )
}

export default ExpenseList