/**
 * This LoginButton component is used in the Login page. 
 * This component is imported in the Auth component.
 **/

import React from 'react';
import classes from './LoginButton.module.css';

const button = (props) => (
    <button
        className={[classes.LoginButton, classes[props.buttonStatus]].join(' ')}
        onClick={props.clicked}>Log In</button>
);

export default button;