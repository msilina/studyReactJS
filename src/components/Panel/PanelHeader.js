import React from 'react';
import { FiEdit, FiSave } from "react-icons/fi";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import withLoadingDelay from '../../hoc/withLoadingDelay';

import './Panel.css';

const PanelHeader = (props) => (
    <table className="panel-header">
        <tbody>
            { props.editing ?
                (
                    <tr>
                        <td>
                            <input ref={ props.captionRef } defaultValue={ props.caption } className="caption"/>
                        </td>
                        {
                            !props.isDisableMode ? (
                                <td className="align-right">
                                    <FiSave size={32} onClick={ props.onSave }/>
                                </td>
                            ) : null
                        }
                        {
                            !props.isDisableMode ? (
                                <td className="align-right">
                                    <IoArrowBackCircleOutline size={32} onClick={ props.onCancel }/>
                                </td>
                            ) : null
                        }
                    </tr>
                ): (
                    <tr>
                        <td>
                            <div className="hide-long-caption caption">
                                { props.caption }
                            </div>
                        </td>
                        {
                            !props.isDisableMode ? (
                                <td className="align-right">
                                    <FiEdit size={32} onClick={ props.onEdit }/>
                                </td>
                            ) : null
                        }
                        <td className="align-right"> 
                            <input onClick={ props.onChecked } type="checkbox" className="form-check-input position-static check"/>
                        </td>
                    </tr>
                ) }
        </tbody>
    </table>
);

const height = 43;

export default withLoadingDelay(PanelHeader, height);
