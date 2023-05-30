import { useState } from 'react';
import './App.css';
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';


const DUMY_EXPENSES = [
  {
    id: 1, title: 'Car Toyota', amount: 294.67, date: new Date(2021, 2, 28)
  },
  {
    id: 2, title: 'Mes', amount: 294.67, date: new Date(2022, 2, 19)
  },
  {
    id: 3, title: 'Vinfast', amount: 294.67, date: new Date(2021,8, 27)
  },
  {
    id: 4, title: 'Lux', amount: 294.67, date: new Date(2021, 5, 19)
  }
]

function App() {

  const [expenses, setExpenses] = useState(DUMY_EXPENSES)

  const addExpenseHandler = (expenses) => {

    setExpenses((prevExpenses) => {
      console.log([expenses, ...prevExpenses]);
      return [expenses, ...prevExpenses];
    })
  }


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense expenses={expenses} />
    </div>
  );
}

export default App;
