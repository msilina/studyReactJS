import React from 'react';
import { shallow } from 'enzyme';

import { Skeleton } from '@material-ui/lab';

import PanelBody from './PanelBody';

describe('PanelBody', () => {
    let wrapper;
    let instance;

    const defaultProps = {
        text: 'text',
        textRef: undefined,
        loading: false,
        editing: true
    };

    beforeEach(() => {
        wrapper = shallow(<PanelBody {...defaultProps} />);
        instance = wrapper.instance();
    });

    it('should render', () => {
        expect(wrapper).toBeDefined();
    });

    it('should show Skeleton when loading: true', () => {
        wrapper.setProps({ loading: true });
        expect(wrapper.find(Skeleton)).toHaveLength(1);
    });

    it('should show text when editing: false', () => {
        wrapper.setProps({ editing: false });
        expect(wrapper.find('div.hide-long-text text')).toBeDefined();
    });
});
