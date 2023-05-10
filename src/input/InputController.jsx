import React from 'react'

const InputController = (props) => {
    return (
        <div>
            {props.label &&
                <div>
                    <label>{props.label}</label>
                    <input  {...props} />
                </div>
            }
        </div>
    )
}

export default InputController