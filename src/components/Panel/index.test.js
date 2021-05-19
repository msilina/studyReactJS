import React from 'react';
import { shallow } from 'enzyme';

import Panel from './index';

describe('Panel', () => {
    let wrapper;
    let instance;

    const history = {
        push: jest.fn(() => jest.fn()),
        block: jest.fn(() => jest.fn())
    };

    const defaultProps = {
        checked: false,
        editing: false,
        text: 'text',
        caption: 'caption',
        id: 'id',
        editPokemons: jest.fn(),
        getPokemonData: jest.fn(),
        isDisableMode: false,
        onChecked: jest.fn(),
        history
    };

    beforeEach(() => {
        wrapper = shallow(<Panel.WrappedComponent {...defaultProps} />);
        instance = wrapper.instance();
    });

    it('should render', () => {
        expect(wrapper).toBeDefined();
    });

    it('should call setState in editPanelHandler', () => {
        const spy = jest.spyOn(instance, 'setState');
        wrapper.setProps({isDisableMode: true})
        instance.editPanelHandler();
        expect(spy).toHaveBeenCalled();
    });

    it('should call setState in savePanelHandler', () => {
        instance.textRef = { current: { setState: jest.fn() } };
        instance.captionRef = { current: { setState: jest.fn() } };
        const spy = jest.spyOn(instance, 'setState');
        instance.savePanelHandler();
        expect(spy).toHaveBeenCalled();
    });

    it('should call setState in cancelPanelHandler', () => {
        const spy = jest.spyOn(instance, 'setState');
        instance.cancelPanelHandler();
        expect(spy).toHaveBeenCalled();
    });

    it('should call setState in checkBoxHandler', () => {
        const spy = jest.spyOn(instance, 'setState');
        instance.checkBoxHandler();
        expect(spy).toHaveBeenCalled();
    });

    it('should call this.props.history.push in openCardHandler', () => {
        const spy = jest.spyOn(history, 'push');
        instance.openCardHandler();
        expect(spy).toHaveBeenCalled();
    });
});
