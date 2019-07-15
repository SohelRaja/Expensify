import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './App.css';
import AppRouter from './routes/AppRouter.js';
import store from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

store.dispatch(addExpense({description: "Water Bill",amount:4500}));
store.dispatch(addExpense({description: "Gas Bill"}));
store.dispatch(setTextFilter("water"));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
console.log(visibleExpenses);

function App(){
    return(
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
}

export default App;
