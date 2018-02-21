import React from 'react'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import TodoList from './components/todoList'
import PageOne from './components/pageOne'

import App from './App'

class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <App>
                    <Route exact path="/" component={TodoList} />
                    <Route path="/page-one" component={PageOne} />
                </App>
            </BrowserRouter>
        );
    }
}

export default AppRouter