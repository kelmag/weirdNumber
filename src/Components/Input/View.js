import React from 'react'
import './index.css';

import {
    compose,
    withState,
    withHandlers,
} from 'recompose'

const View = ({ handleChange, number }) => {
    return (
        <input
            className="input"
            type="number"
            placeholder='Tape a number'
            value={number}
            onChange={handleChange} />
    )
}

const enhance = compose(
    withState('number', 'setNumber', 0),
    withHandlers({
        handleChange: ({ setValue, setNumber }) => ({
            target: { value },
        }) => {
            if (value <= 1000) {
                setValue(value)
                setNumber(value)
            }
        },
    })
)

export default enhance(View);
