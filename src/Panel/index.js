import React, { Component } from 'react';
import './Panel.css';

class Panel extends Component {

    state = {
        checked: false
    }

    changeColorHandler = () => {
        this.setState({
            checked: !this.state.checked
        })
    }

    render() {
        let panelColor = this.state.checked ? "panel-checked" : "panel-default";

        return (
            <div className="panel-list">
                <div className={ panelColor } >
                        <table className="panel-header">
                            <tr>
                                <td>
                                    <h2>{ this.props.caption }</h2>
                                </td>
                                <td className="align-right">
                                    <input onClick={ this.changeColorHandler } type="checkbox" id="check"/>
                                </td>
                            </tr>
                        </table>
                        <hr/>
                        <p>{ this.props.text }</p>
                </div>
            </div>
        );
    }
}

export default Panel;
