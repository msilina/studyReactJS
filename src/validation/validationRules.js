import { isEmpty } from 'lodash';

export const email = value => (value && !(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(value)) ?
    'Incorrect email' : undefined;

const minLength = min => value => value && value.length < min ?
    `Minimum length is ${min} symbols` : undefined;

export const minLength8 = minLength(8);

export const atLeastOneNumberAndCharacter = value => (value && !(/^(?=.*?[a-zA-Z])(?=.*?[0-9])[\w@#$%^?~-].{1,}$/).test(value)) ?
    'Must contain at least one digit and symbol' : undefined;

export const required = value => isEmpty(value) ? 'Required' : undefined;
