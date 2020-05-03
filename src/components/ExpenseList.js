import React from 'react';
import { connect } from 'react-redux';
import {Table} from 'reactstrap';

import ExpenseListItem from './ExpenseListItem';
import visibleExpenses from '../selectors/expenses';

const ExpenseList = ((props)=>{
    return (
        <div className="container">
            <div className="list-header">
                <div className="show-mobile">Expenses</div>
                <div className="show-desktop">Expense</div>
                <div className="show-desktop">Amount</div>
            </div>
            <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div className="list-item list-item-message">
                        <span>No Expenses</span>
                    </div>
                ) : (
                    props.expenses.map((expense)=>{
                        return <ExpenseListItem {...expense} key={expense.id}/>
                    })
                )
            }
            </div>
        </div>
    );
});

const ConnectedExpenseList = connect((state)=>{
    return {
        expenses: visibleExpenses(state.expenses,state.filters)
    };
})(ExpenseList);

export default ConnectedExpenseList;