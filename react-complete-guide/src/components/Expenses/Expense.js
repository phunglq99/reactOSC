import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expense.css'
import ExpensesFilter from './ExpensesFilter';

export default function Expense(props) {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    console.log(filteredYear);

    let expensesContent = <p>No expenses found.</p>;

    if(filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense, index) => {
            return <div key={index}>
                <ExpenseItem expense={expense} />
            </div>
        })
    }


    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onchangeFilter={filterChangeHandler} />
            {expensesContent}

        </Card>
    )
}
