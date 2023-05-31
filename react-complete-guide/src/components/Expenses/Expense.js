import React, { useState } from 'react'
import Card from '../UI/Card';
import './Expense.css'
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';

export default function Expense(props) {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onchangeFilter={filterChangeHandler} />
            <ExpenseList items={filteredExpenses}/>

        </Card>
    )
}
