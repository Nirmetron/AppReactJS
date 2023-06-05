import { useState } from 'react'

function ExpenseItem(props) {    
    const expense = props.expense;
    const [amount, setAmount] = useState(expense.amount);
    function clickHandler() {
        setAmount((amount) => amount + 1);
        console.dir(amount)
    }
    return <div className="expense-item">
        <h2 id="title">{expense.title}</h2>
        <div id="date">{expense.date.toDateString()}</div>
        <div id="amount">{amount}</div>
        <button onClick={clickHandler}>Up Price</button>
    </div>
}
export default ExpenseItem;