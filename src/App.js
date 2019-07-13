import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
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

function App(){
    return(
        <BrowserRouter>
            <div>
                <Route path="/" component={ExpenseDashboardPage} exact/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit" component={EditExpensePage}/>
                <Route path="/help" component={HelpExpensePage}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
