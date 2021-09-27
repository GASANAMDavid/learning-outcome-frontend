import { shallow } from 'enzyme';
import Popover from '@material-ui/core/Popover';
import Help from '../../../components/Helpers/Help';

describe(Help, () => {
  const mockLevels = [{
    id: 2,
    display: '1',
    description: 'I have never had of this outcome',
    color: 'red',
  }, {
    id: 3,
    display: '2',
    description: 'I have heard of this outcome, however I do not feel comfortable utilizing it on a project',
    color: 'yellow',
  }];
  it('shows a popover describing skill level options', () => {
    const wrapper = shallow(<Help levels={mockLevels} />);
    expect(wrapper.find(Popover)).toHaveLength(1);
  });
});
