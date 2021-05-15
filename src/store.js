import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';

import rootReducer from './redux/reducer/index.js';

const logger = store => {
    return next => {
        return action => {
            console.log(`Payload for ${action.type}: `, action.payload);
            const result = next(action);
            return result;
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)));
