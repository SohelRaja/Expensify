import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
import { Jumbotron } from 'reactstrap';

const ExpenseDashboardPage = ()=>(
    <div>
        <Jumbotron>
            <div className="container">
                <div className="row row-header">
                    <ExpensesSummary />
                </div>
            </div>
        </Jumbotron>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;