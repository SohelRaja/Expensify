import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpExpensePage from '../components/HelpExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';

function AppRouter(){
    return(
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={LoginPage} exact={true}/>
                    <Route path="/dashboard" component={ExpenseDashboardPage} />
                    <Route path="/create" component={AddExpensePage}/>
                    <Route path="/edit/:id" component={EditExpensePage}/>
                    <Route path="/help" component={HelpExpensePage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;