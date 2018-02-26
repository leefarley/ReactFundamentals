import React from 'react'
import PropTypes from 'prop-types';
import './inputs.css'

const ReactSelect = (props) => (
    <div className="select">
        <label>
        <div>
            <span>{props.title}</span>
        </div>
        <div>
            <select value={props.selectedOption} onChange={props.handleChange} name={props.name} >
                <option value='0'>Select a option</option>
                {props.options.map((option) => <option key={option.value} value={option.value}>{option.name}</option> )}
            </select>
            </div>
        </label>
    </div>);

ReactSelect.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
    })),
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default ReactSelect