import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import store from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import * as serviceWorker from './serviceWorker';
import {firebase} from './firabase/firebase';

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));
store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
});

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        console.log('Log in');
    }else{
        console.log('Log out');
    }
});

serviceWorker.unregister();
