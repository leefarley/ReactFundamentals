import React from 'react'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import TodoListPage from './components/todoListPage'
import FormPage from './components/formPage'

import App from './App'

class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <App>
                    <Route exact path="/" component={TodoListPage} />
                    <Route path="/page-one" component={FormPage} />
                </App>
            </BrowserRouter>
        );
    }
}

export default AppRouter