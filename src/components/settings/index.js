import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { isEqual } from 'lodash';

import { setSettings } from '../../redux/actions/settingsActions';
import { DataContainer, CheckboxLabel, CheckboxInput, CheckboxContainer, CardContainer } from '../StyledComponent';

import './Settings.css';

class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: props.editing
        }

        this.setEditingHandler = this.setEditingHandler.bind(this);
        this.getEditingHandler = this.getEditingHandler.bind(this);
    }


    setEditingHandler() {
        this.props.setSettings(this.state.editing);
    }

    getEditingHandler() {
        this.setState({
            editing: !this.state.editing
        })
    }

    render() {
        return (
            <CardContainer>
                <DataContainer>
                    <CheckboxContainer>
                        <CheckboxLabel>
                            <CheckboxInput
                                onClick={ this.getEditingHandler }
                                checked={ this.state.editing }
                            />
                            <span>Disable editing</span>
                        </CheckboxLabel>
                        </CheckboxContainer>
                    <div>
                    <Button
                        variant="secondary"
                        className="button-save"
                        onClick={ this.setEditingHandler }
                        disabled={ isEqual(this.props.editing, this.state.editing)}
                    >
                    Save
                    </Button>
                    </div>
                </DataContainer>
            </CardContainer>
        )
    }
}

const mapStateToProps = state => {
    return {
        editing: state.settings.editing,
        username: state.auth.username
    }
};

const mapDispatchToProps = { setSettings };

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
