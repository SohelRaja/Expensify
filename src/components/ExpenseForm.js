import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

const now = moment();

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => {
            return{
                description: description
            }
        })
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => {
            return{
                note: note
            }
        })
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(() =>{
                return{
                    amount: amount
                }
            })
        }
    };
    onDateChange = (createdAt) => {
        this.setState(() => {
            return{
                createdAt: createdAt
            }
        })
    };
    onFocusChange = ({focused}) => {
        this.setState(() => {
            return{
                calendarFocused: focused
            }
        })
    }
    render(){
        return(
            <div>
                <input 
                    type="text"
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <input
                    type="text"
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <textarea
                    placeholder="Add a note for your Expense"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                >
                </textarea>
                <button>Add Expense</button>
            </div>
        )
    }
}