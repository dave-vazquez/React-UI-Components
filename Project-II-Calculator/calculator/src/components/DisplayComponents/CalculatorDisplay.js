import React from 'react';
import {Textfit} from 'react-textfit';
import './Display.css';

const Display = props => {
    return (
        <Textfit 
            className="display"
            mode="single"
            forceSingleModeWidth={true}
            max={80}
            min={16}>
            {props.value}
        </Textfit>
    )
}

export default Display;
