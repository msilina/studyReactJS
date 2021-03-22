import { v4 as uuidv4 } from 'uuid';

import * as types from '../types';
import { editedPanels } from './utils';

const initialState = {
    panels: [],
    loading: false,
    error: undefined
};

const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_POKEMON_DATA_START:
            return {
                ...state,
                loading: true
            }
        case types.GET_POKEMON_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                panels: action.payload
            }
        case types.GET_POKEMON_DATA_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case types.ADD_POKEMON:
            const newPokemon = {
                id: uuidv4(),
                caption: action.payload.pokemonName,
                text: action.payload.description
            }
            return {
                ...state,
                panels: state.panels.concat(newPokemon)
            }
        case types.REMOVE_POKEMON:
            return {
                ...state,
                panels: state.panels.filter(panel => !action.payload.checkedToRemove.includes(panel.id))
            }
        case types.EDIT_POKEMON:
            return {
                ...state,
                panels: editedPanels(state.panels, action.payload.pokemon)
            }
        default:
            return state;
    }
}

export default pokemonsReducer;
