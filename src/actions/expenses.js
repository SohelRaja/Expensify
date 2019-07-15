import uuid from 'uuid';
//Here we are use name export methods to all arrow functions
//Add Expense
export const addExpense = (//This is an arrow function we can use normal function also
    { 
        description = '',
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {} //To avoid undefinded value we use default as empty object({})
    ) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description: description,
        note: note,
        amount: amount,
        createdAt: createdAt
    }
});
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