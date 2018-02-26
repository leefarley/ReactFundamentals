import React from 'react'

import ReactTextBox from './inputs/textbox'
import ReactSelect from './inputs/select'
import ReactSubmit from './inputs/submit'


class FormPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            textBoxOne: '',
            textBoxTwo: 'default',
            selectOne: 0
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount() {
        this.options = [
            {name: "Option 1", value: 10},
            {name: "Option 2", value: 20}
        ]
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log(`Submitting form ${JSON.stringify(this.state)}`)
        event.preventDefault();
    }

    render() {
        return (
        <div>
                <ReactTextBox value={this.state.textBoxOne} handleChange={this.handleInputChange} name="textBoxOne" title="Text Box One" />
                <ReactTextBox value={this.state.textBoxTwo} handleChange={this.handleInputChange} name="textBoxTwo" title="Text Box Two" />
                <ReactSelect options={this.options} selectedOption={this.state.selectOne} handleChange={this.handleInputChange} name="selectOne" title="Select One"/>
                <ReactSubmit handleSubmit={ this.handleSubmit } />
        </div>)
    }
}

export default FormPage
