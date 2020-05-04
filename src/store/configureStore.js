import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

// Dev-tool configuration for redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* Store Creation */
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer,
        auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
);

export default store;