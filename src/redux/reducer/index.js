import pokemonsReducer from './pokemonsReducer';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    pokemons: pokemonsReducer,
    form: formReducer
});

export default rootReducer;
