import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { isUndefined } from 'lodash';

import { getPokemonData, editPokemons } from '../../redux/actions/pokemonActions';
import { DataContainer, CardContainer } from '../StyledComponent';
import './Panel.css';

class CardViewer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: '',
            caption: '',
            id: '',
            editing: false
        }

        this.textRef = React.createRef();
        this.captionRef = React.createRef();

        this.editHandler = this.editHandler.bind(this);
        this.saveHandler = this.saveHandler.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        const idFromHistory = id.substring(1);

        const defaultPokemon = {text: '', caption: '', id: idFromHistory};
        const pokemonData = isUndefined(this.props.error)
            ? this.props.panels.find(panel => panel.id === idFromHistory)
            : defaultPokemon;
        this.setState({
            text: pokemonData.text,
            caption: pokemonData.caption,
            id: pokemonData.id
        });
    }

    editHandler() {
        this.setState({
            editing: true
        });
    }

    saveHandler() {
        const newText = this.textRef.current.value;
        const newCaption = this.captionRef.current.value;

        const idFromHistory = this.props.history.location.state.id;
        const pokemon = {
            id: idFromHistory,
            caption: newCaption,
            text: newText
        };

        this.props.editPokemons(pokemon);

        this.setState({
            editing: false,
            caption: newCaption,
            text: newText
        });
    }

    renderButtons() {
        return (
            !this.props.history.location.state.isDisableMode
                ? (<div>
                    <Button
                        variant="primary"
                        className="button"
                        onClick={ this.editHandler }
                        disabled={ this.state.editing }
                    >
                        Edit
                    </Button>
                    <Button
                        variant="primary"
                        className="button"
                        onClick={ this.saveHandler }
                        disabled={ !this.state.editing }
                    >
                        Save
                    </Button>
                </div>)
                : null
        );
    }

    rendeFields() {
        return (
            this.state.editing
            ? (<div> 
                <input ref={ this.captionRef } defaultValue={ this.state.caption } className="caption input"/>
                <hr />
                <textarea ref={ this.textRef } defaultValue={ this.state.text } className="text input" maxLength='250'></textarea>
            </div>)
            : <div>
                <div className="show-caption caption">
                    { this.state.caption }
                </div>
                <hr />
                <div className="show-text text">
                    { this.state.text }
                </div>
            </div>
        )
    }

    render() {
        return (
            <CardContainer>
                <DataContainer>
                    {
                        isUndefined(this.props.error)
                            ? <div>
                                { this.rendeFields() }
                                { this.renderButtons() }
                            </div>
                            : 'No data available'
                    }
                </DataContainer>
            </CardContainer>
        )
    }
}

const mapStateToProps = state => {
    return {
        panels: state.pokemons.panels,
        error: state.pokemons.error
    }
};

const mapDispatchToProps = { getPokemonData, editPokemons };


export default connect(mapStateToProps, mapDispatchToProps)(CardViewer);
