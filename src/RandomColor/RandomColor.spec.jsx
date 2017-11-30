import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import RandomColor from './RandomColor';

configure({ adapter: new Adapter() });

describe('RandomColor', () => {
  it('should render div.canvas and header', () => {
    const comp = shallow(<RandomColor header="test" />);

    expect(comp.find('h2').text()).toBe('test');
    expect(toJson(comp)).toMatchSnapshot();
  });
});
