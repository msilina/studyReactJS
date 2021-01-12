import React, { Component } from 'react';
import { FiEdit, FiSave } from "react-icons/fi";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import classNames from 'classnames/bind';

import './Panel.css';

class Panel extends Component {

    state = {
        checked: false,
        editing: false,
        text: 'Какая-то важная ерунда про что-то там',
        caption: 'Чтототам'
    }

    changeColorHandler = () => {
        this.setState({
            checked: !this.state.checked
        })
    }

    editPanelHandler = () => {
        this.setState({
            editing: true,
            checked: false,
        })
    }

    savePanelHandler = () => {
        var newText = this.refs.text.value;
        var newCaption = this.refs.caption.value;
        this.setState({
            text: newText,
            caption: newCaption,
            editing: false
        })
    }

    cancelPanelHandler = () => {
        this.setState({
            editing: false
        })
    }

    renderSaveButtons = () => (
        <span>
            <FiSave size={32} onClick={ this.savePanelHandler }/>
            <IoArrowBackCircleOutline size={32} onClick={ this.cancelPanelHandler }/>
        </span>
    );

    renderEditButton = () => (
        <span>
            <FiEdit size={32} onClick={ this.editPanelHandler }/>
        </span>
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
                        <td className="align-right">
                            { this.renderEditButton() }  
                            <input  onClick={ this.changeColorHandler } type="checkbox" id="check"/>                                         
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

    renderEditContent = () => (
        <div>
            <table className="panel-header">
                <tbody>
                    <tr>
                        <td>
                            <input ref="caption" defaultValue={ this.state.caption } className="caption"/>
                        </td>
                        <td className="align-right">
                            { this.renderSaveButtons() }
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr/>
            <textarea ref='text' defaultValue={ this.state.text } className="text" maxLength='250'></textarea>
        </div>
    );

    renderContent = () =>
        this.state.editing ? this.renderEditContent() : this.renderDefaultContent();

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
