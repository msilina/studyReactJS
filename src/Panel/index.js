import React, { Component } from 'react';
import { FiEdit, FiSave } from "react-icons/fi";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import classNames from 'classnames/bind';

import './Panel.css';

class Panel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false,
            editing: false,
            //можно ли вообще так делать?
            text: this.props.text,
            caption: this.props.caption
        }

        this.textRef = React.createRef();
        this.captionRef = React.createRef();
        this.changeColorHandler = this.changeColorHandler.bind(this);
        this.editPanelHandler = this.editPanelHandler.bind(this);
        this.savePanelHandler = this.savePanelHandler.bind(this);
        this.cancelPanelHandler = this.cancelPanelHandler.bind(this);
    }

    changeColorHandler() {
        this.setState({
            checked: !this.state.checked
        })
    }

    editPanelHandler() {
        this.setState({
            editing: true,
            checked: false,
        })
    }

    savePanelHandler() {
        var newText = this.textRef.current.value;
        var newCaption = this.captionRef.current.value;
        this.setState({
            text: newText,
            caption: newCaption,
            editing: false
        })
    }

    cancelPanelHandler() {
        this.setState({
            editing: false
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.isDisableMode !== prevProps.isDisableMode && this.props.isDisableMode) {
            this.setState({
                editing: false
            });
        }
    }

    renderSaveButton = () => (
        <FiSave size={32} onClick={ this.savePanelHandler }/>
    );

    renderCancelButton = () => (
        <IoArrowBackCircleOutline size={32} onClick={ this.cancelPanelHandler }/>
    );

    renderEditButton = () => (
        <FiEdit size={32} onClick={ this.editPanelHandler }/>
    );

    renderDefaultContent = () => (
        <div>
            <table className="panel-header">
                <tbody>
                <tr>
                    <td>
                        <div className="hide-long-caption caption">
                            { this.state.caption }
                        </div>
                    </td>
                    {
                        !this.props.isDisableMode ? (
                            <td className="align-right">
                                { this.renderEditButton() }
                            </td>
                        ) : null
                    }
                    <td className="align-right"> 
                        <input onClick={ this.changeColorHandler } type="checkbox" className="form-check-input position-static check"/>
                    </td>
                </tr>
                </tbody>
            </table>
            <hr/>
            <div className="hide-long-text text"> 
                { this.state.text }
            </div>
        </div>
    );

    renderEditedContent = () => (
        <div>
            <table className="panel-header">
                <tbody>
                    <tr>
                        <td>
                            <input ref={ this.captionRef } defaultValue={ this.state.caption } className="caption"/>
                        </td>
                        {
                            !this.props.isDisableMode ? (
                                <td className="align-right">
                                    { this.renderSaveButton() }
                                </td>
                            ) : null
                        }
                        {
                            !this.props.isDisableMode ? (
                                <td className="align-right">
                                    { this.renderCancelButton() }
                                </td>
                            ) : null
                        }

                    </tr>
                </tbody>
            </table>
            <hr/>
            <textarea ref={ this.textRef } defaultValue={ this.state.text } className="text" maxLength='250'></textarea>
        </div>
    );

    renderContent = () =>
        this.state.editing ? this.renderEditedContent() : this.renderDefaultContent();

    render() {
        return (
            <div className="panel-list">
                <div className={ classNames({'panel-checked': this.state.checked}, {'panel-default': !this.state.checked}) }>
                    { this.renderContent() }
                </div>
             </div>
        );
    }
}

export default Panel;
