import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import AppRouter from './routes/AppRouter.js';
import store from './store/configureStore';


function App(){
    return(
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
}

export default App;
