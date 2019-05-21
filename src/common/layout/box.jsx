import React from 'react'

export default props => (
    <div className={`box box-${props.type === undefined ? 'primary' : props.type}`}>
        {props.children}
    </div>
)