import ExpenseItem from "./Expenseitem";

function ExpenseItems(props) {    
    const items = [];
    for (let i = 0; i<props.expenses.length; i++){
        items.push(<ExpenseItem expense={props.expenses[i]} key={props.expenses[i].id} />)
    }
    return items;
}
export default ExpenseItems;