import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'reactstrap';
import ExpenseForm from './ExpenseForm';
import {startEditExpense, startRemoveExpense} from '../actions/expenses';

const EditExpensePage = (props)=> {
    return (
        <div className="container">
            <h2>Edit Expense: "{props.expense.description}"</h2>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense)=>{
                    props.dispatch(startEditExpense(props.expense.id, expense));
                    props.history.push('/');
                }}            
            /><br />
            <Button 
                color="danger" size="lg"
                onClick={()=>{
                    props.dispatch(startRemoveExpense({id: props.expense.id}));
                    props.history.push('/');
                }}
            >Remove</Button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return{
        expense: state.expenses.find((expense)=> {
            return expense.id === props.match.params.id;
        })
    }
};
export default connect(mapStateToProps)(EditExpensePage);