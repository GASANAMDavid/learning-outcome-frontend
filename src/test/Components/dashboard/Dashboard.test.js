import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../../../components/dashboard/Dashboard';

describe(Dashboard, () => {
  let dashboard;
  beforeEach(() => {
    dashboard = shallow(<Dashboard />);
  });
  it('should render correctly', () => {
    shallow(<Dashboard />);
  });

  it('should have a Header component', () => {
    expect(dashboard.find('Header').exists()).toBe(true);
  });
});
