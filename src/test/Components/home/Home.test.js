import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../../components/home/Home';

describe('Home component', () => {
  it('renders correctly', () => {
    shallow(<Home />);
  });
});
