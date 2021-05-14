/**
 * This Input.js component is used to define the fields used in the form for the Login page.
 * It is imported in the 
 */

import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    /*Implement the validation check*/

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementSetting}
                value={props.elementValue}
                onChange={props.changed}/>
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementSetting}
                value={props.elementValue}
                onChange={props.changed}/>
            break;
        default:
            inputElement = <input
                className={classes.InputElement}
                {...props.elementSetting}
                value={props.elementValue}
                onChange={props.changed}/>;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;