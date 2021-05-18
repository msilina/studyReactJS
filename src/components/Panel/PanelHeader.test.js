import React from 'react';
import { shallow } from 'enzyme';


import { FiEdit, FiSave } from "react-icons/fi";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Skeleton } from '@material-ui/lab';

import PanelHeader from './PanelHeader';

describe('PanelHeader', () => {
    let wrapper;
    let instance;

    const defaultProps = {
        caption: 'caption',
        captionRef: undefined,
        isDisableMode: false,
        onSave: jest.fn(),
        onCancel: jest.fn(),
        onEdit: jest.fn(),
        onChecked: jest.fn(),
        loading: false,
        editing: true
    };

    beforeEach(() => {
        wrapper = shallow(<PanelHeader {...defaultProps} />);
        instance = wrapper.instance();
    });

    it('should render', () => {
        expect(wrapper).toBeDefined();
    });

    it('should render Save button', () => {
        expect(wrapper.find(FiSave)).toHaveLength(1);
        expect(wrapper.find(IoArrowBackCircleOutline)).toHaveLength(1);
        expect(wrapper.find(FiEdit)).toHaveLength(0);
    });

    it('should show Skeleton when loading: true', () => {
        wrapper.setProps({ loading: true });
        expect(wrapper.find(Skeleton)).toHaveLength(1);
    });

    it('should show Edit button when editing: true', () => {
        wrapper.setProps({ editing: false, isDisableMode: false });
        expect(wrapper.find(FiEdit)).toHaveLength(1);
    });

    it('should return null instead of Save and IoArrowBackCircleOutline buttons', () => {
        wrapper.setProps({ loading: false, editing: true, isDisableMode: true });
        expect(wrapper.find(FiSave)).toHaveLength(0);
        expect(wrapper.find(IoArrowBackCircleOutline)).toHaveLength(0);
    });

    it('should return null instead of FiEdit  button', () => {
        wrapper.setProps({ loading: false, editing: false, isDisableMode: true });
        expect(wrapper.find(FiEdit)).toHaveLength(0);
    });
});
