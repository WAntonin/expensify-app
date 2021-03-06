import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import AddExpensePage from './../components/AddExpensePage'
import EditExpensePage from './../components/EditExpensePage'
import ExpenseDashboardPage from './../components/ExpenseDashboardPage'
import NotFoundPage from './../components/NotFoundPage'
import LoginPage from './../components/LoginPage'
import SignUpPage from './../components/SignUpPage'
import RetrievePasswordPage from './../components/RetrievePasswordPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'



export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PublicRoute path="/signup" component={SignUpPage} />
                <PublicRoute path="/retrievepassword" component={RetrievePasswordPage} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <PrivateRoute path="/edit/" component={EditExpensePage} exact={true} />                
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter