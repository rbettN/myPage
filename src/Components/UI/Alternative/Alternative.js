/**
 * This is the Alternative sign component of the myPage application.
 * This component is imported in the Auth component.
 **/

import React from 'react';
import classes from './Alternative.module.css';
import Line from './Line/Line';
import Or from './Or/Or';

const alternative = (props) => (
    <div className={classes.Alternative}>
        <Line/>
        <Or/>
        <Line/>
    </div>
);

export default alternative;