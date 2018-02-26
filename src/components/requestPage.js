import React from 'react'

class RequestPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            todos: []
        }
    }

    componentDidMount(){
        fetch('/api/todos')
            .then(response => response.json())
            .then(
                result => { this.setState({ isLoaded: true, todos: result }) },
                error  => { this.setState({ isLoaded: true, error })}
            )
    }

    render() {
        const { error, isLoaded, todos } = this.state;
        if (!isLoaded) {
            return this.renderIsLoading();
        }
        if (error) {
            return this.renderError(error);
        }
        return (
        <div>
            { todos.map(todo => <div key={todo.id} className={todo.completed ? 'strike' : '' }>Id: {todo.id}, text: {todo.text}</div>) }
        </div>)
    }

    renderError(err) {
        return <div>Error: {err.message}</div>
    }

    renderIsLoading() {
        return <div>Loading...</div>
    }
}

export default RequestPage
