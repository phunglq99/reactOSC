import React from 'react';

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from '../UI/Card';

export default function ExpenseItem(props) {
    const { expense } = props;

    // const [title, setTitle] = useState(expense.title);s
    console.log('render');

    // const clickHandler = () => {
    //     setTitle('Update!');
    // }

    return (
        <Card className="expense-item">
            <ExpenseDate date={expense.date} />
            <div className="expense-item__description">
                <h2> {expense.title} </h2>
                <div className="expense-item__price"> {expense.amount} </div>
            </div>
            {/* <button onClick={clickHandler}>Change Title</button> */}
        </Card>
    )
}
