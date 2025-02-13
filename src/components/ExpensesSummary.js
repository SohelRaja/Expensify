import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  
  return (
    <div>
      <h3>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h3>
      <Link to="/create">
        <Button color="primary" size="lg">
          <i className="fa fa-plus" aria-hidden="true"></i> Add Expense
        </Button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
