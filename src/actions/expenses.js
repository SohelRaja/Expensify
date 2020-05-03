import uuid from 'uuid';
import database from '../firabase/firebase';

//Add Expense
export const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense: expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '', 
            amount = 0, 
            createdAt = 0 
        } = expenseData; //To avoid undefinded value we use default as empty object({})
        const expense = {description, note, amount, createdAt};
        database.ref('expenses').push(expense)
            .then((ref) => {
                dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }));
            });
    };
};

//Remove Expense
export const removeExpense = ({ id }={})=>({
    type: 'REMOVE_EXPENSE',
    id: id
});
//Edit Expense
export const editExpense = (id, updates)=>({
    type: 'EDIT_EXPENSE',
    id: id,
    updates: updates
});
// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});
export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses')
            .once('value')
            .then((snapshot) => {
                const expenses = [];
        
                snapshot.forEach((childSnapshot) => {
                    expenses.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });
        
                dispatch(setExpenses(expenses));
            });
    };
  };

//************DOCS************

// When we are using redux ---->
// component calls action generator
// action generator returns object to component
// component dispatches the object
// redux store changes due to dispatch

// When we are using redux-thunk ----->
// component calls action generator
// action generator returns function to component
// component dispatches the function
// function runs(has the ability to dispatch other actions and do whatever it wants)
