/**
 * This is the Welcome sign component of the myPage application.
 * This component is imported in the Auth component.
 **/

 import React from 'react';
 import classes from './Welcome.module.css';
 
 const welcome = (props) => (
     <div>
         <h1 className={classes.Welcome}>Welcome to myPage!</h1>
     </div>
 );
 
 export default welcome;
 