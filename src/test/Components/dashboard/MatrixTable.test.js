import { shallow } from 'enzyme';
import React from 'react';
import MatrixTable from '../../../components/dashboard/MatrixTable';

describe(MatrixTable, () => {
  const mockRowsData = [{
    id: 1,
    learning_outcome: 'The Four-Phase Test',
    skills_level: '1',
    theme: {
      title: 'Automated Testing',
      link: 'https://github.com/abc',
    },
    apprenticeship_level: 1,
  }];
  const mockSkillLevelOptions = [{ id: '1', display: '' }, { id: '2', display: '' }];
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MatrixTable
      rows={mockRowsData}
      skillLevelOptions={mockSkillLevelOptions}
    />);
  });

  it('renders a given number of SkillRow components', () => {
    expect(wrapper.find('SkillRow')).toHaveLength(1);
  });
});
