import React, { useState } from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [showFrom, setShowForm] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData,
        }

        console.log(expenseData);

        props.onAddExpense(expenseData)
    }

    const buttonShowForm = () => {
        setShowForm(true);
    }

    return (
        <div className='new-expense'>
            {showFrom
                ?
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} showFrom={setShowForm}/>
                :
                <div className="new-expense__button">
                    <button onClick={buttonShowForm}>Add New Expense</button>
                </div>
            }
        </div>
    )
}

export default NewExpense