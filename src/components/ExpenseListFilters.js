import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate} from '../actions/filters';

const ExpenseListFilters = ((props) => {
    return(
        <div>
            <input 
                type='text' 
                value={props.filters.text} 
                onChange={(e)=>{
                    props.dispatch(setTextFilter(e.target.value))
                }
            }/>
            <select
                value={props.filters.sortBy}
                onChange={(e)=>{
                    if(e.target.value === 'date'){
                        props.dispatch(sortByDate());
                    }else if(e.target.value === 'amount'){
                        props.dispatch(sortByAmount());
                    }
                }}
            >
                <option value='date'>Date</option>
                <option value='amount'>Amount</option>
            </select>
        </div>
    );
});

//This code for connecting the store to component
const ConnectedExpenseListFilters = connect((state)=>{
    return {
        filters: state.filters
    };
})(ExpenseListFilters);

export default ConnectedExpenseListFilters;