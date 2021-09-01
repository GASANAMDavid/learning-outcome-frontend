import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import App from '../App';

describe('App', () => {
  it('renders correctly', () => {
    shallow(<App />);
  });

  it('renders dashboard component for /dashboard path', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/dashboard']}>
        <App />
      </MemoryRouter>,
    );
    expect(wrapper.find(Dashboard)).toHaveLength(1);
  });
});
