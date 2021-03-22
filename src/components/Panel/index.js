import React, { Component } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import PanelBody from './PanelBody';
import PanelHeader from './PanelHeader';
import { editPokemons, getPokemonData } from '../../redux/actions/pokemonActions';

import './Panel.css';

class Panel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false,
            editing: false,
            text: props.text,
            caption: props.caption,
            id: props.id
        }

        this.textRef = React.createRef();
        this.captionRef = React.createRef();
        this.editPanelHandler = this.editPanelHandler.bind(this);
        this.savePanelHandler = this.savePanelHandler.bind(this);
        this.cancelPanelHandler = this.cancelPanelHandler.bind(this);
        this.checkBoxHandler = this.checkBoxHandler.bind(this);
        this.openCardHandler = this.openCardHandler.bind(this);
    }

    static getDerivedStateFromProps(nextProps, props) {
        if (props.isDisableMode !== nextProps.isDisableMode && nextProps.isDisableMode) {
            return {
                editing: false
            };
        }
        return null;
    }

    editPanelHandler() {
        this.setState({
            editing: true,
            checked: false
        });
    }

    savePanelHandler() {
        var newText = this.textRef.current.value;
        var newCaption = this.captionRef.current.value;
        this.setState({
            text: newText,
            caption: newCaption,
            editing: false,
            checked: false
        });

        const pokemon = { id: this.state.id, caption: newCaption, text: newText };

        this.props.editPokemons(pokemon);
    }

    cancelPanelHandler() {
        this.setState({
            editing: false,
            checked: false
        });
    }

    checkBoxHandler() {
        this.setState({
            checked: !this.state.checked
        });
        this.props.onChecked(this.props.id, !this.state.checked);
    };

    openCardHandler() {
        if (!this.props.isDisableMode) {
            this.props.history.push({
                pathname: `card/:${this.state.id}`,
                state: {text: this.state.text, caption: this.state.caption, id: this.state.id}
            });
        }
    }

    render() {
        return (
            <div className="panel-list">
                <div onDoubleClick={ this.openCardHandler } className={ classNames({'panel-checked': this.state.checked}, {'panel-default': !this.state.checked}) }>
                    <PanelHeader
                        editing={ this.state.editing }
                        isDisableMode={ this.props.isDisableMode }
                        caption={ this.state.caption }
                        captionRef={ this.captionRef }
                        onEdit={ this.editPanelHandler }
                        onSave={ this.savePanelHandler }
                        onCancel={ this.cancelPanelHandler }
                        onChecked={ this.checkBoxHandler}
                        loading={ this.props.loading }
                    />
                    <hr/>
                    <PanelBody
                        editing={this.state.editing}
                        text={ this.state.text }
                        textRef={ this.textRef }
                        loading={ this.props.loading }
                    />
                </div>
             </div>
        );
    }
}

Panel.propTypes = {
    editing: PropTypes.bool,
    isDisableMode: PropTypes.bool,
    caption: PropTypes.string,
    text: PropTypes.string,
    checked: PropTypes.bool,
    editPanelHandler: PropTypes.func,
    savePanelHandler: PropTypes.func,
    cancelPanelHandler: PropTypes.func,
    checkBoxHandler: PropTypes.func
};

const mapDispatchToProps = { editPokemons, getPokemonData };

export default withRouter(connect(null, mapDispatchToProps)(Panel));

