import pokemonsReducer from './pokemonsReducer';
import settingsReducer from './settingsReducer';
import loginSlice from './loginSlice';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    pokemons: pokemonsReducer,
    settings: settingsReducer,
    auth: loginSlice
});

export default rootReducer;
