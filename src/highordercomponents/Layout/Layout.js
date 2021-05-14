/**
 * This the Layout component of myPage application.
 * This component is imported in the App component.
 **/

import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Image from '../../Components/Image/Image';
import Auth from '../../Components/Auth/Auth';

class Layout extends Component {

    render () {
        return (
            <Aux>
                <Auth/>
            </Aux>
        );
    }
}

export default Layout;

