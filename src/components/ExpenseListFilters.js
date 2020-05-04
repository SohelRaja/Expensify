import React from 'react';
import {connect} from 'react-redux';
import {InputGroup, Input, InputGroupAddon, InputGroupText} from 'reactstrap';
import {setTextFilter, sortByAmount, sortByDate} from '../actions/filters';

const ExpenseListFilters = ((props) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6">
                    <InputGroup>
                        <Input 
                            placeholder="Search Here"
                            type='text' 
                            value={props.filters.text} 
                            onChange={(e)=>{
                                props.dispatch(setTextFilter(e.target.value))
                            }
                        }/>
                        <InputGroupAddon addonType="append">
                            <InputGroupText><i className="fa fa-search" aria-hidden="true"></i></InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </div>  
                <div className="col-12 col-sm-6">
                    <div className="form-group select-option">
                        <select
                            value={props.filters.sortBy}
                            className="form-control"
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
                </div>
            </div>
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