import React from 'react';
const ExpenseListItem = ((expense) => {
    return(
        <div>
            <h3>{expense.description}</h3>
            <p>{expense.amount}-{expense.createdAt}</p>
        </div>
    )
});
export default ExpenseListItem;