import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../../../components/dashboard/Dashboard';

describe(Dashboard, () => {
  it('should have a Header component', () => {
    const dashboard = shallow(<Dashboard />);
    expect(dashboard.find('Header').exists()).toBe(true);
  });
});
