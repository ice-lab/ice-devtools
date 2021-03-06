import React from 'react';
import { shallow } from 'enzyme';
import <%= className %> from '../src/index';
import '../src/main.scss';

it('renders', () => {
    const wrapper = shallow(<<%= className %> />);
    expect(wrapper.find('.<%= name %>').length).toBe(1);
});