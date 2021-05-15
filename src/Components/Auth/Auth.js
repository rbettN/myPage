/**
 * This Auth component is a class-based component that handles access to the application. Gues uses are able to access the application
 * without the need to authenticate.
 */

import React, { Component } from 'react';
import Welcome from '../UI/Welcome/Welcome';
import Input from '../UI/Input/Input';
import LoginButton from '../UI/Buttons/LoginButton/LoginButtons';
import { updateObject, checkValidation } from '../../Utility/Utility';
import classes from './Auth.module.css';

class Auth extends Component {
    state = {
        fields: {
            email: {
                elementType: 'input',
                elementSetting: {
                    type: 'email',
                    placeholder: 'E-mail address'
                },
                elementValidation: {
                    required: true,
                    isEmail: true
                },
                elementValid: false,
                elementValue: '',
                elementTouched: false
            },
            password: {
                elementType: 'input',
                elementSetting: {
                    type: 'password',
                    placeholder: 'Password'
                },
                elementValidation: {
                    required: true,
                    minLength: 6
                },
                elementValid: false,
                elementValue: '',
                elementTouched: false
            }
        }
    }
    
    inputChangeHandler = (event, fieldName) => {
        const updatedFields = updateObject(this.state.fields, {
            [fieldName]: updateObject(this.state.fields[fieldName], {
                elementValue: event.target.value,
                elementValid: checkValidation(event.target.value, this.state.fields[fieldName].elementValidation),
                elementTouched: true
            })
        });
        this.setState({fields: updatedFields});
    }

    render () {
        const formElements = [];
        for (let key in this.state.fields) {
            formElements.push({
                id: key,
                settings: this.state.fields[key] 
            });
        }

        let form = formElements.map(formElements => (
            <Input
                key={formElements.id}
                elementType={formElements.settings.elementType}
                elementSetting={formElements.settings.elementSetting}
                elementValidation={formElements.settings.elementValidation}
                elementIsValid={formElements.settings.elementValid}
                elementValue={formElements.settings.elementValue}
                elementWasTouched={formElements.settings.elementTouched}
                changed={(event) => this.inputChangeHandler(event, formElements.id)}/>
        ));

        return (
            <div className={classes.AuthContainer}>
                <div className={classes.Auth}>
                    <form>
                        <Welcome/>
                        {form}
                        <LoginButton/>
                    </form>
                </div>
            </div>
        );
    }
}

export default Auth;
