import React from 'react'

export default props => (
    <li>
        <input type="checkbox" value="" />                
            <span className="text">{props.description}</span>
            <small className={`label label-${props.label === undefined ? 'primary' : props.label}`}><i class="fa fa-clock-o"></i> {props.priority}</small>
        <div className="tools">
            <i className="fa fa-edit"></i>
            <i className="fa fa-trash-o"></i>
        </div>
    </li>
)