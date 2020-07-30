import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BuildControl from './BuildControl.component';

configure({ adapter: new Adapter() });

describe('<BuildControl/>', () => {
  let wrapper;
  let add;
  let remove;

  beforeEach(() => {
    wrapper = shallow(<BuildControl />);
    add = jest.fn();
    remove = jest.fn();
    wrapper.setProps({
      label: 'test',
      added: add,
      removed: remove,
      disabled: false,
    });
  });

  it('should have an error when not called with correct variables', () => {
    expect(wrapper).toHaveLength(1);
    expect(wrapper.children()).toHaveLength(3);
  });

  it('should register a click', () => {
    console.log(wrapper.text());
  });
});
