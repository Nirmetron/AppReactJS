import { useState } from 'react'
import ExpenseItem from './Components/Expenseitem.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date() },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(),
    },
  ];

  return (
    <>
      <h1>Heheheheha</h1>
    <ExpenseItem expense={expenses[0]}/>
    <ExpenseItem expense={expenses[1]}/>
    <ExpenseItem expense={expenses[2]}/>
    <ExpenseItem expense={expenses[3]}/>
    </>
  )
}

export default App
