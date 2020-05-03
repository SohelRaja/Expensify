import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import AppRouter from './routes/AppRouter.js';
import store from './store/configureStore';
import './firabase/firebase';

// store.dispatch(addExpense({description: "Water Bill",amount:4500}));
// store.dispatch(addExpense({description: "Gas Bill",createdAt:1000}));
// store.dispatch(addExpense({description: "Rent",amount:550000}));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
// console.log(visibleExpenses);

function App(){
    return(
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
}

export default App;
