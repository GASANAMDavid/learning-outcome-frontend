import { shallow } from 'enzyme';
import React from 'react';
import Version from '../../../components/dashboard/Version';

describe(Version, () => {
  it('renders correctly', () => {
    shallow(<Version />);
  });
});
