import React from 'react';
import { shallow } from 'enzyme';
import SkillRow from '../../../components/dashboard/SkillRow';

describe(SkillRow, () => {
  it('renders correctly', () => {
    shallow(<SkillRow row={{ title: 'Title', theme: {} }} skillLevelOptions={[]} />);
  });
});
