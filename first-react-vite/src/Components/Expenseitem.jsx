function ExpenseItem(props) {    
    console.dir(props.expense)
    return <>
        <div id="date">{props.expense.date.toDateString()}</div>
        <h2 id="title">{props.expense.title}</h2>
        <div id="amount">{props.expense.amount}</div>
    </>
}
export default ExpenseItem;