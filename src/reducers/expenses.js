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
            return state.filter(({id})=>{
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
        case 'SET_EXPENSES':
            return action.expenses;
        default:
            return state;
    }
};
export default expenseReducer;