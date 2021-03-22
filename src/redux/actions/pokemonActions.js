import axios from 'axios';

import * as types from '../types';

export const getPokemonData = () => dispatch => {
    dispatch({
        type: types.GET_POKEMON_DATA_START
    });

    return axios.get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json').then(
        response =>
            dispatch({
                type: types.GET_POKEMON_DATA_SUCCESS,
                payload: response.data.slice(0, 15).map(panel => ({
                    id: panel.Number,
                    caption: panel.Name,
                    text: panel.About,
                }))
            }),
        error => {
            dispatch({
                type: types.GET_POKEMON_DATA_FAIL,
                payload: error.response
            });
        }
    )
}

export const addPokemon = (caption, text) => dispatch => dispatch({
    type: types.ADD_POKEMON,
    payload: {pokemonName: caption, description: text}
});

export const removePokemon = checkedToRemove => dispatch => dispatch({
    type: types.REMOVE_POKEMON,
    payload: { checkedToRemove }
});

export const editPokemons = pokemon => dispatch => dispatch({
    type: types.EDIT_POKEMON,
    payload: { pokemon }
})
