import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import './App.css';

const ExpenseDashboardPage = ()=>(
    <div>
        This is the dashboard page.
    </div>
);
const AddExpensePage = ()=>(
    <div>
        This is the Add Expense page.
    </div>
);
const EditExpensePage = ()=>(
    <div>
        This is the Edit Expense page.
    </div>
);
const HelpExpensePage = ()=>(
    <div>
        This is the Help Expense page.
    </div>
);
const NotFoundPage = ()=>(
    <div>
        404! - <Link to="/">Go Home</Link>
    </div>
);
const Header = ()=>(
    <div>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard </NavLink>
        <NavLink to="/create" activeClassName="is-active">Create </NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit </NavLink>
        <NavLink to="/help" activeClassName="is-active">Help </NavLink>
    </div>
);

function App(){
    return(
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={ExpenseDashboardPage} exact/>
                    <Route path="/create" component={AddExpensePage}/>
                    <Route path="/edit" component={EditExpensePage}/>
                    <Route path="/help" component={HelpExpensePage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
