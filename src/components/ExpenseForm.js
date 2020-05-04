import React from 'react';
import moment from 'moment';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';


export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount/100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: '',
            buttonText: props.expense ? 'Update Expense' : 'Add Expense',
            buttonIcon: props.expense ? 'fa fa-pencil' : 'fa fa-plus'
        };
    }
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
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() =>{
                return{
                    amount: amount
                }
            })
        }
    };
    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => {
                return{
                    createdAt: createdAt
                }
            })
        }
    };
    onFocusChange = ({focused}) => {
        this.setState(() => {
            return{
                calendarFocused: focused
            }
        })
    };
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            //Set Error State equals to "Please Provide Description and Amount"
            this.setState(()=>{
                return{
                    error: "Please Provide Description and Amount."
                }
            })
        }else{
            this.setState(()=>{
                return{
                    error: ''
                }
            });
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }
    render(){
        return(
            <div>
                {this.state.error && <Alert color="danger">{this.state.error}</Alert>}
                <Form
                    onSubmit={this.onSubmit}
                >
                    <FormGroup>
                        <Label>Description</Label>
                        <Input 
                            type="text"
                            placeholder="Your Description"
                            autoFocus
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Amount</Label>
                        <Input
                            type="text"
                            placeholder="Your Amount"
                            value={this.state.amount}
                            onChange={this.onAmountChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Date</Label><br />
                        <SingleDatePicker
                            date={this.state.createdAt}
                            onDateChange={this.onDateChange}
                            focused={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Note</Label>
                        <Input
                            type="textarea"
                            rows="3"
                            placeholder="Add a note for your Expense"
                            value={this.state.note}
                            onChange={this.onNoteChange}
                        />
                    </FormGroup>
                    <Button color="primary" size="lg"><i className={this.state.buttonIcon} aria-hidden="true"></i> {this.state.buttonText}</Button>
                </Form>
            </div>
        )
    }
}