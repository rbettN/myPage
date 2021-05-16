/**
 * This is the Perugia (italy) image component of the myPage application.
 * This component is imported in the Layout component.
 **/

import React from 'react';
import Perugia from '../../Assets/Images/Random/Perugia.jpg';
import classes from './Image.css';

const image = (props) => (
    <div className={classes.Image} style={{height: props.height}}>
        <img src={Perugia} alt="Perugia, Italy"/>
    </div>
);

export default image;


