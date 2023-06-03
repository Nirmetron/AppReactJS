function ExpenseItem(props) {    
    console.dir(props.expense)
    return <div className="expense-item">
        <h2 id="title">{props.expense.title}</h2>
        <div id="date">{props.expense.date.toDateString()}</div>
        <div id="amount">{props.expense.amount}</div>
    </div>
}
export default ExpenseItem;