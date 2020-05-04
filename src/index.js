import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import store from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import * as serviceWorker from './serviceWorker';
import {firebase} from './firabase/firebase';
import {history} from './routes/AppRouter';
import {login, logout} from './actions/auth';


let hasRendered = false;
const renderRoot = () => {
    if(!hasRendered){
        ReactDOM.render(<App />, document.getElementById('root'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        console.log('Log in');
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderRoot();
            if(history.location.pathname === '/'){
                history.push("/dashboard");
            }
        });
    }else{
        console.log('Log out');
        store.dispatch(logout());
        renderRoot();
        history.push("/");
    }
});

serviceWorker.unregister();
