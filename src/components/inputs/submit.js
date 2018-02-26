import React from 'react'
import './inputs.css'

const ReactSubmit = (props) => (
    <div className="submit">
        <input type="submit" value="Submit" onClick={ props.handleSubmit } />
    </div>
);

export default ReactSubmit