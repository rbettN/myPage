/**
 * This is a generic navigation item component that is imported in the NagivationMenu.
 * This generic component is used by each navigation item in the toolbar.
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.css';

const navigationItem = (props) => {
    <li classname={classes.NavigationItem}>
        <NavLink>{props.children}</NavLink>
    </li>
}

export default navigationItem;
