import React from 'react';
import { shallow } from 'enzyme';
import { MenuItem } from '@material-ui/core';
import SkillRow from '../../../components/dashboard/SkillRow';

describe(SkillRow, () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SkillRow row={{ theme: { title: 'Title' } }} skillLevelOptions={[{ id: '' }]} />);
  });

  it('shows menu for different skill levels', () => {
    const button = wrapper.find('.skills-level-btn');
    button.simulate('click', { currentTarget: {} });
    expect(wrapper.find(MenuItem)).toHaveLength(1);
  });
});
