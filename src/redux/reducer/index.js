import getPokemonsReducer from './getPokemonsReducer';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    pokemons: getPokemonsReducer,
    form: formReducer
});

export default rootReducer;
