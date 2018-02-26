import React from 'react'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import TodoListPage from './components/todoListPage'
import FormPage from './components/formPage'
import RequestPage from './components/requestPage'

import App from './App'

class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <App>
                    <Route exact path="/" component={TodoListPage} />
                    <Route path="/form-page" component={FormPage} />
                    <Route path="/request-page" component={RequestPage} />
                </App>
            </BrowserRouter>
        );
    }
}

export default AppRouter