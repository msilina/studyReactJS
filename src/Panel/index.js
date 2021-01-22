import React, { Component } from 'react';
import classNames from 'classnames/bind';

import PanelBody from './PanelBody';
import PanelHeader from './PanelHeader';

import './Panel.css';

class Panel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: props.checked,
            editing: false,
            text: props.text,
            caption: props.caption
        }

        this.textRef = React.createRef();
        this.captionRef = React.createRef();
        this.editPanelHandler = this.editPanelHandler.bind(this);
        this.savePanelHandler = this.savePanelHandler.bind(this);
        this.cancelPanelHandler = this.cancelPanelHandler.bind(this);
        this.setCheckedHandler = this.setCheckedHandler.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.isDisableMode !== prevProps.isDisableMode && this.props.isDisableMode) {
            this.setState({
                editing: false
            });
        }
    }

    getIndexById(checked, id) {
        return checked.findIndex(ch => ch.id === id);
    }

    editPanelHandler() {
        let checked = [...this.state.checked];
        const index = this.getIndexById(checked, this.props.id)
        checked[index].checked = false;

        this.setState({
            editing: true,
            checked: checked 
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
            editing: false,
        })
    }

    setCheckedHandler(id) {
        let checked = [...this.state.checked];
        const index = this.getIndexById(checked, this.props.id)
        checked[index].checked = !checked[index].checked;
        this.setState({ checked: checked });
    }

    render() {
        let checked = [...this.state.checked];
        const index = this.getIndexById(checked, this.props.id)
        const ch = this.state.checked[index].checked;
        debugger
        return (
            <div className="panel-list">
                <div className={ classNames({'panel-checked': ch}, {'panel-default': !ch}) }>
                    <PanelHeader
                        editing={this.state.editing}
                        isDisableMode={this.props.isDisableMode}
                        caption={ this.state.caption }
                        captionRef={ this.captionRef }
                        edit={ () => this.editPanelHandler() }
                        save={ () => this.savePanelHandler() }
                        cancel={ () => this.cancelPanelHandler() }
                        setChecked={ () => this.setCheckedHandler(this.props.id) }
                    />
                    <hr/>
                    <PanelBody
                        editing={this.state.editing}
                        text={ this.state.text }
                        textRef={ this.textRef }
                    />
                </div>
             </div>
        );
    }
}

export default Panel;
