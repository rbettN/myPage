/**
 * This the Layout component of myPage application.
 * This component is imported in the App component.
 **/

import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.css';
import Image from '../../Components/Image/Image';

class Layout extends Component {

    render () {
        return (
            <Aux>
                <Image/>
            </Aux>
        );
    }
}

export default Layout;

