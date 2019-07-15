import { createStore, combineedusers, combineReducers } from 'redux';

/*Action*/
//Add Expense
//Remove Expense
//Edit Expense
//Set_text_filter
//Sort_by_date
//Sort_by_amount
//Set_start_date
//Set_end_date

/* Reducers */
//Expense Reducers
const expenseReducerDefaultState = []
const expenseReducer = (state = expenseReducerDefaultState, action)=>{
    switch (action.type){
        default:
            return state;
    }
};
//Filter Reducers
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState,action)=>{
    switch (action.type){
        default:
            return state;
    }
};
/* Store Creation */
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filter: filterReducer
    })
);

console.log(store.getState())

//Demo State
const demoState = {
    expenses: [{
        id: '44565512457',
        description: "January Rent",
        note: "This is the demon state",
        amount: 5400,
        createdAt: 0
    }],
    filter: {
        text: 'rent',
        sortBy: 'amount',// date or amount
        startDate: undefined,
        endDate: undefined
    }
};