import React, { Component } from 'react';

class TodoListPage extends Component{

    constructor(props) {
        super(props);
        this.state = { buttonClicks: 0 };

        // This binding is necessary to make `this` work in the callback
        this.buttonClick = this.buttonClick.bind(this);
    }

    buttonClick() {
        this.setState((prevState, props) => ({ buttonClicks: ++prevState.buttonClicks }));
    }

    render() {
        return (
            <div> 
                <div>My first component: { this.props.name }</div>
                <br/>
                <button onClick={ this.buttonClick }>Button Clicker</button>
                <div>Button Clicks { this.state.buttonClicks }</div>
            </div>
        );
    }
}

export default TodoListPage

// NOTES:
/*
state is isolated to a component instance.
props are passed in from parent component.

both props and state can be updated during lifecycle hooks and events.
props updated by parents will update in the child.

components must have a root node
there are 4 ways to instancate a component
- es5 createClass stateful 
     var ES5SatefulComponent = React.createClass({
         render: function() {}
     });
- es6 class stateful
     class ES6SatefulComponent extends React.Component {
         render() {}
     }
- es5 stateless component function
    var ES5SatelessComponent = function (props) {
        return (<div></div>);
    };
- es6 stateless component function
    const ES6StatelessComponent = (props) => (<div></div>);

stateless good for presentation components
stateful good for container components

stateless does not have access to state or lifecycle hooks.
stateless also does not need to use this.

*/