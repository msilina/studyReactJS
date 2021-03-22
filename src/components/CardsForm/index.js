import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addPokemon, removePokemon, getPokemonData } from '../../redux/actions/pokemonActions';
import ActionsPanel from '../ActionsPanel';
import PanelList from '../Panels/PanelList';

class CardsForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isDisableMode: false,
        };

        this.disableEditingHandler = this.disableEditingHandler.bind(this);
        this.removePokemonHandler = this.removePokemonHandler.bind(this);
        this.checkedHandler = this.checkedHandler.bind(this);
        this.addPokemonHandler = this.addPokemonHandler.bind(this);
        this.scrollToBottom = this.scrollToBottom.bind(this);
    }

    checkedToRemove = [];

    componentDidMount() {
        this.props.getPokemonData();
    }

    scrollToBottom() {
        window.scroll({
            top: document.body.offsetHeight,
            left: 0, 
            behavior: 'smooth',
          });
    }

    addPokemonHandler() {
        this.props.addPokemon('def', 'def');
        this.scrollToBottom();
    }

    removePokemonHandler() {
        this.props.removePokemon(this.checkedToRemove);
    }

    disableEditingHandler() {
        this.setState({
            isDisableMode: !this.state.isDisableMode
        })
    }

    checkedHandler(id, checked) {
        return checked ? this.checkedToRemove.push(id) :
            this.checkedToRemove = this.checkedToRemove.filter(panelId => panelId !== id);
    }

    render() {
        return (
            <div>
                <ActionsPanel
                    isDisableMode={ this.state.isDisableMode }
                    clickDisable={ this.disableEditingHandler }
                    onAdd= { this.addPokemonHandler }
                    onRemove={ this.removePokemonHandler }
                />
                <PanelList
                    isDisableMode={ this.state.isDisableMode }
                    onChecked={ this.checkedHandler }
                    panels={ this.props.panels }
                    error={ this.props.error }
                    loading={ this.props.loading }
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        panels: state.pokemons.panels,
        error: state.pokemons.error,
        loading: state.pokemons.loading
    }
};

const mapDispatchToProps = { addPokemon, removePokemon, getPokemonData };


export default connect(mapStateToProps, mapDispatchToProps)(CardsForm);
