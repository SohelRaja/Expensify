import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
/*Action*/
//Add Expense
const addExpense = (//This is an arrow function we can use normal function also
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
const removeExpense = ({ id }={})=>({
    type: 'REMOVE_EXPENSE',
    id: id
});
//Edit Expense
const editExpense = (id, updates)=>({
    type: 'EDIT_EXPENSE',
    id: id,
    updates: updates
});
//Set_text_filter
const setTextFilter = (text='')=>({
    type: 'SET_TEXT_FILTER',
    text: text
});
//Sort_by_date
const sortByDate = ()=>({
    type: 'SORT_BY_DATE'
});
//Sort_by_amount
const sortByAmount = ()=>({
    type: 'SORT_BY_AMOUNT'
});
//Set_start_date
const setStartDate = (startDate)=>({
    type: 'SET_START_DATE',
    startDate: startDate
});
//Set_end_date
const setEndDate = (endDate)=>({
    type: 'SET_END_DATE',
    endDate: endDate
});
/* Reducers */
//Expense Reducers
const expenseReducerDefaultState = []
const expenseReducer = (state = expenseReducerDefaultState, action)=>{
    switch (action.type){
        case 'ADD_EXPENSE':
            //return state.concat(action.expense);
            return [//This is spread operator it works exactly same just mentioned return value
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return store.filter(({id})=>{
                return id !== action.id;
            });
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    };
                }else{
                    return expense;
                }
            });
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
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return{
                ...state,
                setStartDate: action.startDate
            };
        case 'SET_END_DATE':
            return{
                ...state,
                setEndDate: action.endDate
            };
        default:
            return state;
    }
};

/* get visible expenses */
const getVisibleExpenses = (expenses,{text, sortBy, startDate, endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
}
/* Store Creation */
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filter: filterReducer
    })
);

//To track changes we have to use subscribe, it will execute every time changes of state
store.subcribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
});
//To dispatch something
const expenseOne = store.dispatch(addExpense({description: 'Rent',amount: 100, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee',amount: 300, createdAt: -1000}));

store.dispatch(removeExpense({id: expenseOne.expense.id}));
store.dispatch(editExpense(expenseTwo.expense.id,{ amount:500 }));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate(125));//startDate 125
store.dispatch(setStartDate());//startDate undefined
store.dispatch(setEndDate(1250));//endDate 1250
//Demo State
const demoState = {
    expenses: [{
        id: '44565512457',
        description: "January Rent",
        note: "This is the demo state",
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