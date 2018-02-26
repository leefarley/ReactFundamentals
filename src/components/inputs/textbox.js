import React from 'react'
import './inputs.css'

const ReactTextBox = (props) => (
    <div className="textbox">
        <label htmlFor={props.name} >
            <div>
                <span>{props.title}</span>
            </div>
            <div>
                <input type="text" name={props.name} value={props.value} onChange={props.handleChange} />
            </div>
        </label>
    </div>);

export default ReactTextBox